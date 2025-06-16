import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  fillCardContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  fillCard: {
    padding: 12,
    borderRadius: 10,
    width: 120,
  },
  fillText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  infoCard: {
    backgroundColor: '#201f24',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#aaa',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  collectButton: {
    backgroundColor: '#2ecc71',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  collectButtonActive: {
    backgroundColor: '#e74c3c',
  },
  collectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressCard: {
    backgroundColor: '#201f24',
    padding: 16,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  copyButton: {
    padding: 8,
    marginLeft: 10,
  },
  red: {
    backgroundColor: '#e74c3c',
  },
  gray: {
    backgroundColor: '#201f24',
  },
});