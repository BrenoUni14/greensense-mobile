import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function HelpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central de Ajuda</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Revisions')}
        >
          <Text style={styles.icon}>📄</Text>
          <View>
            <Text style={styles.cardTitle}>Solicitar Revisão</Text>
            <Text style={styles.cardDescription}>
              Revisões para sensores danificados.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Occurrences')}
        >
          <Text style={styles.icon}>🚨</Text>
          <View>
            <Text style={styles.cardTitle}>Reportar Ocorrência</Text>
            <Text style={styles.cardDescription}>
              Informe um problema, erro ou ocorrência.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}