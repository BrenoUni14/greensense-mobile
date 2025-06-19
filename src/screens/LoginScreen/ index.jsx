import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/background-login.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Acesse sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>Ainda não tem acesso?</Text>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.outlineButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}