import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
};

const UserFormScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<{ params: { user?: User } }, 'params'>>();

  const isEditing = !!route.params?.user;

  const [name, setName] = useState(route.params?.user?.name || '');
  const [email, setEmail] = useState(route.params?.user?.email || '');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Editar Usuário' : 'Criar Usuário',
    });
  }, [navigation, isEditing]);

  const handleSave = () => {
    if (!name || !email) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const user = {
      id: isEditing ? route.params?.user?.id! : uuidv4(),
      name,
      email,
    };

    Alert.alert('Usuário salvo (mock)', JSON.stringify(user, null, 2));
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Confirmar', 'Deseja realmente apagar este usuário?', [
      { text: 'Cancelar' },
      {
        text: 'Apagar',
        onPress: () => {
          Alert.alert('Usuário removido (mock)');
          navigation.goBack();
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome do usuário"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email do usuário"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Gravar</Text>
      </TouchableOpacity>

      {isEditing && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  label: {
    color: '#ccc',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
