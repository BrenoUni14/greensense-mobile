import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/userListStyles';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'USER';
};

const UserListScreen = () => {
  const navigation = useNavigation<any>();
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'João Silva', email: 'joao@email.com', role: 'USER' },
    { id: '2', name: 'Maria Souza', email: 'maria@email.com', role: 'USER' },
  ]);

  const deleteUser = (id: string) => {
    Alert.alert('Confirmar', 'Deseja realmente apagar este usuário?', [
      { text: 'Cancelar' },
      {
        text: 'Apagar',
        onPress: () => setUsers(users.filter((u) => u.id !== id)),
        style: 'destructive',
      },
    ]);
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('UserForm', { user: item })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteUser(item.id)}
        >
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.title}>Usuários Comuns</Text>}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('UserForm')}
      >
        <Text style={styles.createButtonText}>Criar novo usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserListScreen;
