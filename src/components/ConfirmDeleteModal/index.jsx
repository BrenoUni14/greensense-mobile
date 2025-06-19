import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ConfirmDeleteModal({ visible, onCancel, onConfirm }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Deseja excluir esta lixeira?</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDelete} onPress={onConfirm}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}