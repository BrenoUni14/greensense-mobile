import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { getTrashBins } from '../../services/trashBinService';

export default function MapScreen({ navigation }) {
  const [trashBins, setTrashBins] = useState([]);

  useEffect(() => {
    fetchTrashBins();
  }, []);

  const fetchTrashBins = async () => {
    try {
      const data = await getTrashBins();
      setTrashBins(data);
    } catch (error) {
      console.error('Erro ao carregar lixeiras:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,{"\n"}<Text style={styles.username}>Gabriel Maia</Text></Text>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text style={styles.title}>Mapa de Lixeiras</Text>

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
            coordinate={{
              latitude: parseFloat(bin.latitude) || -23.561684,
              longitude: parseFloat(bin.longitude) || -46.625378,
            }}
            title={bin.name}
            description={bin.location}
          />
        ))}
      </MapView>
    </View>
  );
}