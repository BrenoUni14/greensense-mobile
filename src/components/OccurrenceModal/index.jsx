// src/components/OccurrenceModal/index.jsx
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function OccurrenceModal({ visible, onClose, onSubmit, occurrence }) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (occurrence) {
      setDescription(occurrence.description);
    } else {
      setDescription('');
    }
  }, [occurrence]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{occurrence ? 'Editar Ocorrência' : 'Nova Ocorrência'}</Text>

          <TextInput
            placeholder="Descrição da Ocorrência"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                const newOccurrence = { ...occurrence, description };
                onSubmit(newOccurrence);
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