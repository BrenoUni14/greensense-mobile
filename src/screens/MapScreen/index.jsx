import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default function MapScreen({ navigation }) {
  const [trashBins, setTrashBins] = useState([]);

  useEffect(() => {
    // Mock - Lista de lixeiras (pode ser integrado ao backend depois)
    const data = [
      { id: '1', name: 'Lixeira A12', latitude: -23.561684, longitude: -46.625378 },
      { id: '2', name: 'Lixeira C08', latitude: -23.573200, longitude: -46.641300 },
      { id: '3', name: 'Lixeira F24', latitude: -23.570500, longitude: -46.631900 },
    ];
    setTrashBins(data);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>

      {/* Título */}
      <Text style={styles.title}>Mapa de Lixeiras</Text>

      {/* Mapa */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.561684,
          longitude: -46.625378,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {trashBins.map(bin => (
          <Marker
            key={bin.id}
            coordinate={{ latitude: bin.latitude, longitude: bin.longitude }}
            title={bin.name}
          />
        ))}
      </MapView>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}