import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function TrashBinModal({ visible, onClose, onSubmit, trashBin }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    if (trashBin) {
      setName(trashBin.name);
      setLocation(trashBin.location);
      setLevel(trashBin.level);
    } else {
      setName('');
      setLocation('');
      setLevel('');
    }
  }, [trashBin]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{trashBin ? 'Editar Lixeira' : 'Nova Lixeira'}</Text>

          <TextInput
            placeholder="Nome da Lixeira"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Localização"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />

          <TextInput
            placeholder="Nível (%)"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={level}
            onChangeText={setLevel}
            keyboardType="numeric"
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                const newBin = { id: trashBin?.id || Date.now().toString(), name, location, level: `${level}% Cheia` };
                onSubmit(newBin);
              }}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}