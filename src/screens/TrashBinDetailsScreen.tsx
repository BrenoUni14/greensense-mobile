import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/trashBinDetailsStyles';

type RootStackParamList = {
  TrashBinDetails: { id: string; nivel: number };
  Login: undefined;
};

type TrashBinDetailsRouteProp = RouteProp<RootStackParamList, 'TrashBinDetails'>;

const TrashBinDetailsScreen = () => {
  const route = useRoute<TrashBinDetailsRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [isCollecting, setIsCollecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleCollectionToggle = () => {
    setIsCollecting(!isCollecting);
  };

  const handleCopyAddress = () => {
    // Lógica para copiar endereço
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#2ecc71" />
      ) : (
        <>
          <Text style={styles.title}>Lixeira E03</Text>

          <View style={styles.fillCardContainer}>
            <View style={[styles.fillCard, isCollecting ? styles.gray : styles.red]}>
              <Text style={styles.fillText}>{isCollecting ? 'Em coleta...' : '90% cheia'}</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Informações</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>ID:</Text>
              <Text style={styles.infoValue}>E03</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Última Coleta:</Text>
              <Text style={styles.infoValue}>20 Mar 2025</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Status do Sensor:</Text>
              <Text style={styles.infoValue}>Online</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.collectButton, isCollecting && styles.collectButtonActive]}
            onPress={handleCollectionToggle}
          >
            <Text style={styles.collectButtonText}>
              {isCollecting ? 'Finalizar Coleta' : 'Iniciar rota de Coletas'}
            </Text>
          </TouchableOpacity>

          {isCollecting && (
            <View style={styles.addressCard}>
              <Text style={styles.addressText}>Avenida Goiania, 650</Text>
              <TouchableOpacity style={styles.copyButton} onPress={handleCopyAddress}>
                <Icon name="content-copy" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default TrashBinDetailsScreen;
