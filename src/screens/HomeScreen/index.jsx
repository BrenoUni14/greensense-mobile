import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const trashBins = [
    { id: '1', name: 'Lixeira A12', location: 'Avenida Paulista', level: '90% Cheia' },
    { id: '2', name: 'Lixeira C08', location: 'Parque Ibirapuera', level: '43% Cheia' },
    { id: '3', name: 'Lixeira F24', location: 'Avenida Goias', level: '35% Cheia' },
  ];

  const alerts = [
    { id: '1', message: 'Sensor Offline: Lixeira A45' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>

      {/* Status Cards */}
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

      {/* Button - Ver Mapa de Lixeiras */}
      <TouchableOpacity style={styles.mapButton}>
        <Ionicons name="location-outline" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.mapButtonText}>Ver Mapa de Lixeiras</Text>
      </TouchableOpacity>

      {/* Lixeiras */}
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
              <Text style={styles.trashName}>{item.name}</Text>
              <Text style={styles.trashLocation}>{item.location}</Text>
              <Text style={styles.trashLevel}>{item.level}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Alertas Recentes */}
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