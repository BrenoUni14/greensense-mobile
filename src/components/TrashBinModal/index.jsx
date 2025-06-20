import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

export default function TrashBinModal({ visible, onClose, onSubmit, trashBin }) {
  const [tipo, setTipo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [capacidadeMaxima, setCapacidadeMaxima] = useState('');
  const [nivelAtual, setNivelAtual] = useState('');

  useEffect(() => {
    if (trashBin) {
      setTipo(trashBin.tipo);
      setEndereco(trashBin.endereco);
      setCapacidadeMaxima(trashBin.capacidadeMaxima.toString());
      setNivelAtual(trashBin.nivelAtual.toString());
    } else {
      setTipo('');
      setEndereco('');
      setCapacidadeMaxima('');
      setNivelAtual('');
    }
  }, [trashBin]);

  const handleSave = () => {
    if (!tipo || !endereco || !capacidadeMaxima) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const newBin = {
      tipo,
      endereco,
      capacidadeMaxima: parseInt(capacidadeMaxima, 10),
      nivelAtual: parseInt(nivelAtual || '0', 10),
    };

    if (trashBin?.id) {
      newBin.id = trashBin.id;
    }

    onSubmit(newBin);
  };

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
            placeholder="Tipo de Lixeira"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={tipo}
            onChangeText={setTipo}
          />

          <TextInput
            placeholder="Endereço"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={endereco}
            onChangeText={setEndereco}
          />

          <TextInput
            placeholder="Capacidade Máxima"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={capacidadeMaxima}
            onChangeText={setCapacidadeMaxima}
            keyboardType="numeric"
          />

          <TextInput
            placeholder="Nível Atual (%)"
            placeholderTextColor="#AAAAAA"
            style={styles.input}
            value={nivelAtual}
            onChangeText={setNivelAtual}
            keyboardType="numeric"
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}