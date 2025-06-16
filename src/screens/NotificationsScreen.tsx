import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/notificationsStyles';

const notifications = [
  {
    id: '1',
    title: 'Lixeira A12 quase cheia',
    description: 'O nível da lixeira A12 atingiu 80%.',
    timestamp: 'Hoje às 10:24',
  },
  {
    id: '2',
    title: 'Coleta programada',
    description: 'A coleta da lixeira C21 está agendada para amanhã.',
    timestamp: 'Ontem às 15:12',
  },
  {
    id: '3',
    title: 'Lixeira B07 esvaziada',
    description: 'A lixeira B07 foi esvaziada com sucesso.',
    timestamp: '2 dias atrás',
  },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }: { item: typeof notifications[0] }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notificações</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default NotificationsScreen;