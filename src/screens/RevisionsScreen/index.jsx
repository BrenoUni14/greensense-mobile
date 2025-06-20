import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import {
  getRevisions,
  createRevision,
  updateRevision,
  deleteRevision,
} from '../../services/revisionService';
import RevisionModal from '../../components/RevisionModal';

export default function RevisionsScreen() {
  const [revisions, setRevisions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRevision, setSelectedRevision] = useState(null);

  const fetchRevisions = async () => {
    try {
      const data = await getRevisions();
      setRevisions(data);
    } catch (error) {
      console.error('Erro ao carregar revisões:', error);
    }
  };

  useEffect(() => {
    fetchRevisions();
  }, []);

  const handleSaveRevision = async (revision) => {
    try {
      if (revision.id) {
        await updateRevision(revision.id, revision);
      } else {
        await createRevision(revision);
      }
      fetchRevisions();
      setModalVisible(false);
      setSelectedRevision(null);
    } catch (error) {
      console.error('Erro ao salvar revisão:', error);
    }
  };

  const handleDeleteRevision = (revision) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Deseja realmente excluir esta revisão?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteRevision(revision.id);
            fetchRevisions();
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Revisões</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setSelectedRevision(null);
            setModalVisible(true);
          }}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {revisions.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{item.sensorName}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemDate}>Data: {item.date}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setSelectedRevision(item);
                setModalVisible(true);
              }}
            >
              <Ionicons name="create-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteRevision(item)}
            >
              <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <RevisionModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedRevision(null);
        }}
        onSubmit={handleSaveRevision}
        revision={selectedRevision}
      />
    </ScrollView>
  );
}