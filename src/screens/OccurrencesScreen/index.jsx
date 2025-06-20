import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import {
  getOccurrences,
  createOccurrence,
  updateOccurrence,
  deleteOccurrence,
} from '../../services/occurrenceService';
import OccurrenceModal from '../../components/OccurrenceModal';

export default function OccurrencesScreen() {
  const [occurrences, setOccurrences] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);

  const fetchOccurrences = async () => {
    try {
      const data = await getOccurrences();
      setOccurrences(data);
    } catch (error) {
      console.error('Erro ao carregar ocorrências:', error);
    }
  };

  useEffect(() => {
    fetchOccurrences();
  }, []);

  const handleSaveOccurrence = async (occurrence) => {
    try {
      if (occurrence.id) {
        await updateOccurrence(occurrence.id, occurrence);
      } else {
        await createOccurrence(occurrence);
      }
      fetchOccurrences();
      setModalVisible(false);
      setSelectedOccurrence(null);
    } catch (error) {
      console.error('Erro ao salvar ocorrência:', error);
    }
  };

  const handleDeleteOccurrence = (occurrence) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Deseja realmente excluir esta ocorrência?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteOccurrence(occurrence.id);
            fetchOccurrences();
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ocorrências</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setSelectedOccurrence(null);
            setModalVisible(true);
          }}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {occurrences.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemDate}>Data: {item.date}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setSelectedOccurrence(item);
                setModalVisible(true);
              }}
            >
              <Ionicons name="create-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteOccurrence(item)}
            >
              <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <OccurrenceModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedOccurrence(null);
        }}
        onSubmit={handleSaveOccurrence}
        occurrence={selectedOccurrence}
      />
    </ScrollView>
  );
}