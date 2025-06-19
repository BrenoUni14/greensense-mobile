import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ProfileScreen({ navigation }) {

  const handleEditProfile = () => {
    Alert.alert('Editar Perfil', 'Função de editar perfil ainda não implementada.');
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Gabriel Maia</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>gabriel.maia@email.com</Text>

        <Text style={styles.label}>Cargo:</Text>
        <Text style={styles.value}>Administrador</Text>
      </View>

      <TouchableOpacity style={styles.buttonEdit} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}