import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getLixeiraById, DetalheLixeira } from '../services/lixeiraService';
import { registrarColeta } from '../services/coletaService';
import { Alert } from 'react-native';

type RootStackParamList = {
  TrashBinDetails: { id: string };
};

type TrashBinDetailsRouteProp = RouteProp<RootStackParamList, 'TrashBinDetails'>;

const TrashBinDetailsScreen = () => {
  const route = useRoute<TrashBinDetailsRouteProp>();
  const { id } = route.params;

  const [lixeira, setLixeira] = useState<DetalheLixeira | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLixeiraById(id)
      .then(setLixeira)
      .catch((err) => {
        console.error('Erro ao buscar lixeira:', err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  if (!lixeira) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Lixeira não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Lixeira {lixeira.id}</Text>

      <Text style={styles.label}>Última Coleta:</Text>
      <Text style={styles.value}>{new Date(lixeira.ultimoRegistro).toLocaleString()}</Text>

      <Text style={styles.label}>Status do Sensor:</Text>
      <Text style={styles.value}>{lixeira.statusSensor}</Text>

      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() =>
          registrarColeta({
            lixeiraId: lixeira.id,
            quantidadeColetada: 10, // ← substitua conforme necessário
            responsavel: 'operador1',
            metodo: 'manual',
          })
            .then(() => Alert.alert('Sucesso', 'Coleta iniciada.'))
            .catch(() => Alert.alert('Erro', 'Erro ao iniciar coleta.'))
        }
      >
        <Text style={styles.buttonText}>Iniciar Coleta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonFinish}
        onPress={() =>
          registrarColeta({
            lixeiraId: lixeira.id,
            quantidadeColetada: 15, // ← substitua conforme necessário
            responsavel: 'operador1',
            metodo: 'manual',
          })
            .then(() => Alert.alert('Sucesso', 'Coleta finalizada.'))
            .catch(() => Alert.alert('Erro', 'Erro ao finalizar coleta.'))
        }
      >
        <Text style={styles.buttonText}>Finalizar Coleta</Text>
        <Text style={styles.addressText}>{lixeira.endereco}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrashBinDetailsScreen;

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
  },
  label: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#fff',
  },
  buttonStart: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonFinish: {
    backgroundColor: '#e67e22',
    padding: 16,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 6,
    textAlign: 'center',
  },
  error: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: 30,
  },
});