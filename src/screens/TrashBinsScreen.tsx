import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import styles from '../styles/trashBinsStyles';

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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lixeiras</Text>
      {lixeiras.map((lixeira) => (
        <TouchableOpacity
          key={lixeira.id}
          style={styles.card}
          onPress={() => navigation.navigate('TrashBinDetails', { id: lixeira.id })}
        >
          <Text style={styles.codigo}>Lixeira {lixeira.codigo}</Text>
          <Text style={styles.info}>{lixeira.localizacao}</Text>
          <Text style={styles.nivel}>{lixeira.nivel}% Cheia</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TrashBinsScreen;