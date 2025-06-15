import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getLixeiras, Lixeira } from '../services/lixeiraService';
import styles from '../styles/trashBinsStyles';

type RootStackParamList = {
  Tabs: undefined;
  TrashBinDetails: { id: string };
};

const TrashBinsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([]);

  useEffect(() => {
    getLixeiras().then(setLixeiras).catch((err) => {
      console.error('Erro ao buscar lixeiras:', err);
    });
  }, []);

  const getColor = (nivel: number) => {
    if (nivel >= 75) return styles.red;
    if (nivel >= 50) return styles.yellow;
    return styles.green;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixeiras</Text>
      <FlatList
        data={lixeiras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.binItem, getColor(item.nivel)]}
            onPress={() => navigation.navigate('TrashBinDetails', { id: item.id })}
          >
            <Text style={styles.binText}>
              Lixeira {item.id} - {item.nivel}% Cheia
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrashBinsScreen;