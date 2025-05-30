import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { AppTabParamList } from '../navigation/AppStack';

type TrashBinDetailsRouteProp = RouteProp<AppTabParamList, 'TrashBinDetails'>;

const TrashBinDetailsScreen = () => {
  const route = useRoute<TrashBinDetailsRouteProp>();
  const { id } = route.params;

  // Mock data — depois substituir pela API
  const lastCollected = '12/09/2025 14:20';
  const sensorStatus = 'Operando normalmente';
  const address = 'Rua Verde, 123 – Jardim Sustentável';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Lixeira {id}</Text>

      <Text style={styles.label}>Última Coleta:</Text>
      <Text style={styles.value}>{lastCollected}</Text>

      <Text style={styles.label}>Status do Sensor:</Text>
      <Text style={styles.value}>{sensorStatus}</Text>

      <TouchableOpacity style={styles.buttonStart}>
        <Text style={styles.buttonText}>Iniciar Coleta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonFinish}>
        <Text style={styles.buttonText}>Finalizar Coleta</Text>
        <Text style={styles.addressText}>{address}</Text>
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
});