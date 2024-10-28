import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground, TextInput,Button } from 'react-native';
import { supabase } from './SupaBase';
import { Alert } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        correo:'',
        contraseña:'',
    };
  }

  render() {

    const login = async() =>{
        const {error} = await supabase.auth.signInWithPassword({

            email:this.state.correo,
            password:this.state.contraseña,

        })

        if (error) {
            Alert.alert("Error al iniciar sesion","Asegurese que las credenciales sean correctas o esten llenos los campos")
        }
        else{
            Alert.alert("Inicio correcto",`Bienvenido ${this.state.correo}`, )
            this.props.navigation.navigate('Dashboard')
        }


        this.setState({
            correo: "",
            contraseña: ""
        });
    }


    return (
        <ImageBackground
        source={{ uri: 'https://keepcoding.io/wp-content/uploads/2024/04/hardware-externo-1.jpg' }}
        style={styles.background}
        >
        <View style={styles.overlay}>

            <View>
                <Text style={styles.text}>Bienvenido</Text>
            </View>

            <View style={{marginTop:50,marginLeft:75,}}>
                <TextInput style={styles.input}
                    placeholder="Correo"
                    placeholderTextColor="#aaa"
                    onChangeText={correo => this.setState({correo})}
                >
                </TextInput>
            </View>

            <View style={{marginTop:40,marginLeft:75,}}>
            <TextInput style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                    onChangeText={contraseña => this.setState({contraseña})}
                >
                </TextInput>
            </View>

            <View style={{marginTop:40,marginLeft:5,}}>

            <Button title='Ingresar' color='black' onPress={login}></Button>

            </View>



        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // Ajuste de la imagen
      justifyContent: 'center', // Centra el contenido
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)', // Capa oscura para mejorar el contraste
      padding: 20,
      height:500
    },
    text: {
      color: '#fff',
      fontSize: 24,
      textAlign: 'center',
    },
    textInput:{
        color:'#fff',
        fontSize:24,
        textAlign:'center',
        marginTop:600
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        color: '#fff',
        backgroundColor: 'black',
      },
      button: {
        width: '80%',
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
  });
  