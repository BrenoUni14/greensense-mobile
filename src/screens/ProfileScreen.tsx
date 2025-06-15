import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/profileStyles';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const { userName, logout } = useContext(AuthContext);

  const handleUpdate = () => {
    Alert.alert('Info', 'Funcionalidade de edição ainda não implementada.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {userName || 'usuário'}!</Text>
      <Text style={styles.subtitle}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar novo e-mail"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;