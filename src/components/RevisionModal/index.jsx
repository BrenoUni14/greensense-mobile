// src/components/RevisionModal/index.jsx
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function RevisionModal({ visible, onClose, onSubmit, revision }) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (revision) {
      setDescription(revision.description);
    } else {
      setDescription('');
    }
  }, [revision]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{revision ? 'Editar Revisão' : 'Nova Revisão'}</Text>

          <TextInput
            placeholder="Descrição da Revisão"
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
                const newRevision = { ...revision, description };
                onSubmit(newRevision);
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