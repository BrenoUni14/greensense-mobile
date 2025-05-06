import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/profileStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
