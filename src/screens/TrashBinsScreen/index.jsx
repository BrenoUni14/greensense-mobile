import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TrashBinModal from '../../components/TrashBinModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import styles from './styles';

export default function TrashBinsScreen() {
  const [trashBins, setTrashBins] = useState([
    { id: '1', name: 'Lixeira A12', location: 'Avenida Paulista', level: '90% Cheia' },
    { id: '2', name: 'Lixeira C08', location: 'Parque Ibirapuera', level: '43% Cheia' },
    { id: '3', name: 'Lixeira F24', location: 'Avenida Goias', level: '35% Cheia' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [binToDelete, setBinToDelete] = useState(null);

  const handleSaveBin = (newBin) => {
    setTrashBins(prevBins => {
      const existingIndex = prevBins.findIndex(bin => bin.id === newBin.id);
      if (existingIndex >= 0) {
        // Update
        const updatedBins = [...prevBins];
        updatedBins[existingIndex] = newBin;
        return updatedBins;
      } else {
        // Create
        return [...prevBins, newBin];
      }
    });
    setModalVisible(false);
    setSelectedBin(null);
  };

  const handleDeleteBin = () => {
    setTrashBins(prevBins => prevBins.filter(bin => bin.id !== binToDelete.id));
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