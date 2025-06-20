import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
    } catch (err) {
      setError('Erro ao acessar. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

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
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>Acessar</Text>}
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