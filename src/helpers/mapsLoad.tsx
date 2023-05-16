import { styles } from '../components/css';
import { LogBox, View, Image } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
LogBox.ignoreAllLogs();

export default function Maps() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [subscription, setSubscription] = useState<any>(null);

  const requestLocationPermission = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
        console.log("LOCAL", currentPosition);
      }
    } catch (error) {
      console.error("Erro ao solicitar permissão de localização:", error);
      throw error;
    }
  };

  useEffect(() => {
    const subscribeToLocationChanges = async () => {
      try {
        await requestLocationPermission();

        const newSubscription = watchPositionAsync(
          {
            accuracy: LocationAccuracy.Highest,
            timeInterval: 10000,
            distanceInterval: 1
          },
          (response) => {
            console.log("nova endereço", response);
            console.log("Novo LOCAL", response);
            setLocation(response);
          }
        ).catch(error => {
          console.error("Erro ao atualizar a localização:", error);
          throw error;
        });

        setSubscription(newSubscription);
      } catch (error) {
        console.error("Erro ao atualizar a localização:", error);
        throw error;
      }
    };

    subscribeToLocationChanges();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <MapView
      style={styles.Maps}
      showsUserLocation
      initialRegion={{
        latitude: location ? location.coords.latitude : -21.4215718,
        longitude: location ? location.coords.longitude : -46.8539457,
        latitudeDelta: location ? 0.003 : 0.011,
        longitudeDelta: location ? 0.003 : 0.011,
      }}
    >
      {location && (
        <Marker
          tracksViewChanges={false}
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          <View style={styles.teste}>
            <Image
              source={require('../assets/icons/img/Logo.png')}
              style={styles.imageForeground}
              resizeMode='contain'
            />
          </View>
        </Marker>
      )}
    </MapView>
  );
}
