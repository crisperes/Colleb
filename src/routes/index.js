import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SingIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false}}
            />

            <Stack.Screen
              name="SignIn"
              component={SingIn}
              options={{ headerShown: false}}
            />

            <Stack.Screen
              name="SignUp"
              component={SingUp}
              options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}