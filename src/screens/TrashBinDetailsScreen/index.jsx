import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function TrashBinDetailsScreen({ route }) {
  const { trashBin } = route.params || {
    trashBin: {
      name: 'Lixeira E03',
      location: 'Avenida Goiania, 650',
      level: '90% Cheia',
      lastCollected: '20 Mar 2025',
      sensorStatus: 'Online',
    },
  };
  const [isCollecting, setIsCollecting] = useState(false);

  const handleStartCollection = () => {
    setIsCollecting(true);
    Alert.alert('Rota de Coleta Iniciada');
  };

  const handleFinishCollection = () => {
    setIsCollecting(false);
    Alert.alert('Coleta Finalizada');
  };

  const handleCopyAddress = () => {
    Alert.alert('Endereço copiado!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>

      {/* TrashBin Name */}
      <Text style={styles.trashName}>{trashBin.name}</Text>

      {/* Status */}
      <View style={[styles.statusBadge, { backgroundColor: isCollecting ? '#333333' : '#8B0000' }]}>
        <Text style={styles.statusText}>{isCollecting ? 'Em Coleta...' : trashBin.level}</Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Informações</Text>
        <Text style={styles.infoText}>ID: {trashBin.name}</Text>
        <Text style={styles.infoText}>Última Coleta: {trashBin.lastCollected}</Text>
        <Text style={styles.infoText}>Status do Sensor: {trashBin.sensorStatus}</Text>
      </View>

      {/* Start/Finish Button */}
      {isCollecting ? (
        <TouchableOpacity style={styles.finishButton} onPress={handleFinishCollection}>
          <Text style={styles.buttonText}>Finalizar Coleta</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.startButton} onPress={handleStartCollection}>
          <Text style={styles.buttonText}>Iniciar Rota de Coleta</Text>
        </TouchableOpacity>
      )}

      {/* Address */}
      <TouchableOpacity style={styles.addressCard} onPress={handleCopyAddress}>
        <Text style={styles.addressText}>{trashBin.location}</Text>
        <Ionicons name="copy-outline" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}