import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'Sensor Offline: Lixeira A45', date: '25 Jul 2025' },
    { id: '2', message: 'Nível Crítico: Lixeira C08', date: '24 Jul 2025' },
    { id: '3', message: 'Nova Lixeira Adicionada: Lixeira F10', date: '23 Jul 2025' },
  ]);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Ionicons name="alert-circle-outline" size={24} color="#FFD700" style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text>
        </Text>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Notificações</Text>

      {/* Lista de Notificações */}
      {notifications.length > 0 ? (
        <>
          <FlatList
            data={notifications}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
          <TouchableOpacity style={styles.clearButton} onPress={handleClearNotifications}>
            <Text style={styles.clearButtonText}>Limpar Notificações</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.noNotificationsText}>Nenhuma notificação no momento.</Text>
      )}
    </View>
  );
}