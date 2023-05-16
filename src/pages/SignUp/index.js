import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function SignUp() {

    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
  const cadastro = () => {

  }
  



  return (
    <View style={styles.container}>
        <StatusBar hidden />

        <Image style={{width:200,height:200}} source={require('../../assets/logo.png')} />

        <TextInput placeholder="Nome..." style={styles.textInput} onChangeText={text=>setNome(text)} />
        <TextInput placeholder="E-mail..." style={styles.textInput} onChangeText={text=>setEmail(text)} />
        <TextInput secureTextEntry={true} placeholder="Senha..." style={styles.textInput} onChangeText={text=>setSenha(text)} />
    
        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color:'white',textAlign:'center'}}>CADASTRAR!</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'darkgreen',
    borderRadius:20,
    justifyContent:'center'
  }
});