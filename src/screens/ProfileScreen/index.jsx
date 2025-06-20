import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>{user?.name}</Text></Text>
        <Ionicons
          name="log-out-outline"
          size={24}
          color="white"
          onPress={signOut}
        />
      </View>

      {/* Profile Info */}
      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>Nome:</Text>
        <Text style={styles.profileText}>{user?.name}</Text>

        <Text style={styles.profileLabel}>Email:</Text>
        <Text style={styles.profileText}>{user?.email}</Text>

        <Text style={styles.profileLabel}>ID:</Text>
        <Text style={styles.profileText}>{user?.id}</Text>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutButtonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}