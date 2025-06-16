import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import styles from '../styles/trashBinsStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Lixeira {
  id: string;
  codigo: string;
  localizacao: string;
  nivel: number;
}

type TrashBinsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TrashBinDetails'>;

const TrashBinsScreen = () => {
  const navigation = useNavigation<TrashBinsNavigationProp>();
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([]);

  useEffect(() => {
    fetch('http://<SEU-IP-LOCAL>:8080/api/lixeiras')
      .then(res => res.json())
      .then(data => setLixeiras(data))
      .catch(() => {
        setLixeiras([
          { id: '1', codigo: 'A12', localizacao: 'Rua das Flores, 123', nivel: 90 },
          { id: '2', codigo: 'B34', localizacao: 'Av. Central, 456', nivel: 40 },
          { id: '3', codigo: 'C56', localizacao: 'Praça Verde, 789', nivel: 60 },
        ]);
      });
  }, []);

  const getColor = (nivel: number) => {
    if (nivel >= 75) return styles.red;
    if (nivel >= 50) return styles.yellow;
    return styles.green;
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleTrashBinPress = (id: string, nivel: number) => {
    navigation.navigate('TrashBinDetails', { id, nivel });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.greeting}>Olá,<Text style={styles.greetingBold}> Gabriel Maia</Text></Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Lixeiras</Text>

      <FlatList
        data={lixeiras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.binItem, getColor(item.nivel)]}
            onPress={() => handleTrashBinPress(item.id, item.nivel)}
          >
            <Text style={styles.binText}>
              Lixeira {item.codigo} - {item.nivel}% Cheia
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrashBinsScreen;