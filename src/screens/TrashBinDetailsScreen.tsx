import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../styles/trashBinDetailsStyles';

interface Lixeira {
  id: string;
  codigo: string;
  localizacao: string;
  nivel: number;
}

const TrashBinDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: string };

  const [lixeira, setLixeira] = useState<Lixeira | null>(null);

  useEffect(() => {
    fetch(`http://<SEU-IP-LOCAL>:8080/api/lixeiras/${id}`)
      .then((res) => res.json())
      .then((data) => setLixeira(data))
      .catch(() => {
        setLixeira({
          id,
          codigo: 'A12',
          localizacao: 'Rua das Flores, 123',
          nivel: 85,
        });
      });
  }, [id]);

  if (!lixeira) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Lixeira</Text>
      <Text style={styles.label}>Código: <Text style={styles.value}>{lixeira.codigo}</Text></Text>
      <Text style={styles.label}>Localização: <Text style={styles.value}>{lixeira.localizacao}</Text></Text>
      <Text style={styles.label}>Nível de preenchimento: <Text style={styles.value}>{lixeira.nivel}%</Text></Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrashBinDetailsScreen;