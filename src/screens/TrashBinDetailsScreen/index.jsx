import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TrashBinModal from '../../components/TrashBinModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import styles from './styles';
import {
  getTrashBins,
  createTrashBin,
  updateTrashBin,
  deleteTrashBin,
} from '../../services/trashBinService';

export default function TrashBinsScreen() {
  const [trashBins, setTrashBins] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [binToDelete, setBinToDelete] = useState(null);

  const loadTrashBins = async () => {
    try {
      const data = await getTrashBins();
      setTrashBins(data);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar lixeiras.');
    }
  };

  useEffect(() => {
    loadTrashBins();
  }, []);

  const handleSaveBin = async (newBin) => {
    try {
      if (newBin.id) {
        await updateTrashBin(newBin.id, newBin);
      } else {
        await createTrashBin(newBin);
      }
      await loadTrashBins();
      setModalVisible(false);
      setSelectedBin(null);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar lixeira.');
    }
  };

  const handleDeleteBin = async () => {
    try {
      await deleteTrashBin(binToDelete.id);
      await loadTrashBins();
      setDeleteModalVisible(false);
      setBinToDelete(null);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao deletar lixeira.');
    }
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

      {trashBins.map((bin) => (
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
      ))}

      {/* Modal de criar/editar */}
      <TrashBinModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedBin(null);
        }}
        onSubmit={handleSaveBin}
        trashBin={selectedBin}
      />

      {/* Modal de confirmação de delete */}
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