import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/trashBinsStyles';

// Tipagem da Root Stack (conforme RootNavigator.tsx)
type RootStackParamList = {
  Tabs: undefined;
  TrashBinDetails: { id: string };
};

const TrashBinsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const mockBins: { id: string; fill: number }[] = [
    { id: 'A12', fill: 35 },
    { id: 'B98', fill: 75 },
    { id: 'C45', fill: 20 },
    { id: 'E03', fill: 90 },
  ];

  const getColor = (fill: number) => {
    if (fill >= 75) return styles.red;
    if (fill >= 50) return styles.yellow;
    return styles.green;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixeiras</Text>
      <FlatList
        data={mockBins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.binItem, getColor(item.fill)]}
            onPress={() => navigation.navigate('TrashBinDetails', { id: item.id })}
          >
            <Text style={styles.binText}>
              Lixeira {item.id} - {item.fill}% Cheia
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrashBinsScreen;