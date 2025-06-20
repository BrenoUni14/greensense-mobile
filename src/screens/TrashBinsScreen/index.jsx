import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TrashBinModal from '../../components/TrashBinModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import styles from './styles';
import {
  getTrashBins,
  createTrashBin,
  updateTrashBin,
  deleteTrashBin
} from '../../services/trashBinService';

export default function TrashBinsScreen() {
  const [trashBins, setTrashBins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [binToDelete, setBinToDelete] = useState(null);

  useEffect(() => {
    fetchTrashBins();
  }, []);

  const fetchTrashBins = async () => {
    setLoading(true);
    try {
      const data = await getTrashBins();
      setTrashBins(data);
    } catch (error) {
      console.error('Erro ao carregar lixeiras:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBin = async (newBin) => {
    try {
      if (newBin.id) {
        await updateTrashBin(newBin.id, newBin);
      } else {
        await createTrashBin(newBin);
      }
      await fetchTrashBins();
    } catch (error) {
      console.error('Erro ao salvar lixeira:', error);
    }
    setModalVisible(false);
    setSelectedBin(null);
  };

  const handleDeleteBin = async () => {
    try {
      await deleteTrashBin(binToDelete.id);
      await fetchTrashBins();
    } catch (error) {
      console.error('Erro ao deletar lixeira:', error);
    }
    setDeleteModalVisible(false);
    setBinToDelete(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lixeiras</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setSelectedBin(null);
            setModalVisible(true);
          }}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator color="#4CAF50" size="large" style={{ marginTop: 50 }} />
      ) : trashBins.length === 0 ? (
        <Text style={styles.noDataText}>Nenhuma lixeira cadastrada.</Text>
      ) : (
        trashBins.map((bin) => (
          <View key={bin.id} style={styles.trashItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.trashName}>{bin.name}</Text>
              <Text style={styles.trashLocation}>{bin.location}</Text>
              <Text style={styles.trashLevel}>{bin.level}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setSelectedBin(bin);
                  setModalVisible(true);
                }}
              >
                <Ionicons name="create-outline" size={20} color="#FFFFFF" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  setBinToDelete(bin);
                  setDeleteModalVisible(true);
                }}
              >
                <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      <TrashBinModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedBin(null);
        }}
        onSubmit={handleSaveBin}
        trashBin={selectedBin}
      />

      <ConfirmDeleteModal
        visible={deleteModalVisible}
        onCancel={() => {
          setDeleteModalVisible(false);
          setBinToDelete(null);
        }}
        onConfirm={handleDeleteBin}
      />
    </ScrollView>
  );
}