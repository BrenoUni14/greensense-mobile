import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function NotificationsScreen() {
  const notifications = [
    { id: '1', message: 'Sensor Offline: Lixeira A45' },
    { id: '2', message: 'Nova coleta agendada para Lixeira B12' },
    { id: '3', message: 'Atualização do sensor: Lixeira C08 Online' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Ionicons name="alert-circle-outline" size={20} color="white" style={{ marginRight: 8 }} />
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>

      <Text style={styles.title}>Notificações</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}