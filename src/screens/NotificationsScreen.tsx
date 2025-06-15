import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockNotifications = [
  { id: '1', title: 'Lixeira A12 está 85% cheia', date: 'Hoje, 10:30' },
  { id: '2', title: 'Nova coleta registrada na Lixeira B98', date: 'Ontem, 16:15' },
  { id: '3', title: 'Sensor da Lixeira C45 está offline', date: 'Há 2 dias' },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>

      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationText}>{item.title}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#2ecc71',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  notificationCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
  },
  notificationDate: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
});