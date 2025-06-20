import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { getNotifications } from '../../services/notificationService';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      console.error('Erro ao carregar notificações:', error);
    } finally {
      setLoading(false);
    }
  };

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
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text>
        </Text>
        <Ionicons name="notifications" size={24} color="white" />
      </View>

      <Text style={styles.title}>Notificações</Text>

      {loading ? (
        <ActivityIndicator color="#4CAF50" size="large" style={{ marginTop: 50 }} />
      ) : notifications.length > 0 ? (
        <>
          <FlatList
            data={notifications}
            keyExtractor={item => item.id.toString()}
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