import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/notificationsStyles';

const mockNotifications = [
  { id: '1', message: 'Lixeira B98 está 80% cheia.' },
  { id: '2', message: 'Erro no sensor da lixeira C45.' },
  { id: '3', message: 'Lixeira A12 coletada com sucesso.' },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma notificação até o momento.</Text>
        }
      />
    </View>
  );
};

export default NotificationsScreen;