import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { getTrashBins } from '../../services/trashBinService';

export default function HomeScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const [trashBins, setTrashBins] = useState([]);

  useEffect(() => {
    const fetchTrashBins = async () => {
      try {
        const data = await getTrashBins();
        setTrashBins(data);
      } catch (error) {
        console.error('Erro ao carregar lixeiras:', error);
      }
    };
    fetchTrashBins();
  }, []);

  const alerts = [
    { id: '1', message: 'Sensor Offline: Lixeira A45' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons
          name="log-out-outline"
          size={24}
          color="white"
          onPress={signOut}
        />
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coletas{'\n'}Pendentes:</Text>
          <Text style={styles.cardNumber}>4</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lixeiras{'\n'}Críticas</Text>
          <Text style={styles.cardNumber}>2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Rota ativa:</Text>
          <Text style={styles.cardStatus}>Não{'\n'}Iniciada</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('Map')}
      >
        <Ionicons name="location-outline" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.mapButtonText}>Ver Mapa de Lixeiras</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Lixeiras</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>Ver Todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trashList}>
          {trashBins.map(item => (
            <View key={item.id} style={styles.trashItem}>
              <Text style={styles.trashName}>{item.tipo}</Text>
              <Text style={styles.trashLocation}>{item.endereco}</Text>
              <Text style={styles.trashLevel}>{item.nivelAtual} %</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alertas Recentes</Text>
        {alerts.map(item => (
          <View key={item.id} style={styles.alertItem}>
            <Ionicons name="warning-outline" size={18} color="white" style={{ marginRight: 8 }} />
            <Text style={styles.alertText}>{item.message}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}