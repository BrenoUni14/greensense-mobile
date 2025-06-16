import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getLixeiras, Lixeira } from '../services/lixeiraService';
import styles from '../styles/trashBinsStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  Tabs: undefined;
  TrashBinDetails: { id: string; nivel: number };
  Login: undefined;
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

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleTrashBinPress = (id: string, nivel: number) => {
    navigation.navigate('TrashBinDetails', { id, nivel });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.greeting}>Olá,<Text style={styles.greetingBold}> Gabriel Maia</Text></Text>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Lixeiras</Text>
      
      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.green]}
          onPress={() => handleTrashBinPress('1', 35)}
        >
          <Text style={styles.cardLeftText}>Lixeira</Text>
          <Text style={styles.cardRightText}>35% Cheia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.yellow]}
          onPress={() => handleTrashBinPress('2', 75)}
        >
          <Text style={styles.cardLeftText}>Lixeira</Text>
          <Text style={styles.cardRightText}>75% Cheia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.green]}
          onPress={() => handleTrashBinPress('3', 20)}
        >
          <Text style={styles.cardLeftText}>Lixeira</Text>
          <Text style={styles.cardRightText}>20% Cheia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.red]}
          onPress={() => handleTrashBinPress('4', 90)}
        >
          <Text style={styles.cardLeftText}>Lixeira</Text>
          <Text style={styles.cardRightText}>90% Cheia</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lixeiras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.binItem, getColor(item.nivel)]}
            onPress={() => handleTrashBinPress(item.id, item.nivel)}
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