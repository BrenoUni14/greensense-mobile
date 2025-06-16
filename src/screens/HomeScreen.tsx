import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/homeStyles';

interface ColetaInfo {
  lixeiraId: string;
  status: string;
  endereco: string;
  porcentagem: number;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const { userName, userId, userToken } = useContext(AuthContext);

  const [coletasPendentes, setColetasPendentes] = useState<number>(0);
  const [lixeirasCriticas, setLixeirasCriticas] = useState<number>(0);
  const [coletas, setColetas] = useState<ColetaInfo[]>([]);

  useEffect(() => {
    fetch(`http://<SEU-IP-LOCAL>:8080/api/lixeiras`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const mockData: ColetaInfo[] = data.map((l: any) => ({
          lixeiraId: l.codigo,
          status: `${l.nivel}% Cheia`,
          endereco: l.localizacao,
          porcentagem: l.nivel,
        }));
        setColetas(mockData);
        setLixeirasCriticas(mockData.filter((x) => x.porcentagem >= 75).length);
        setColetasPendentes(mockData.length);
      })
      .catch(() => {
        const fallback = [
          { lixeiraId: 'A12', status: '90% Cheia', endereco: 'Avenida Paulista', porcentagem: 90 },
          { lixeiraId: 'C08', status: '43% Cheia', endereco: 'Parque Ibirapuera', porcentagem: 43 },
          { lixeiraId: 'F24', status: '35% Cheia', endereco: 'Avenida Goiás', porcentagem: 35 },
        ];
        setColetas(fallback);
        setColetasPendentes(fallback.length);
        setLixeirasCriticas(fallback.filter(x => x.porcentagem >= 75).length);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Olá, {userName ?? 'usuário'}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Coletas Pendentes:</Text>
          <Text style={styles.statValue}>{coletasPendentes}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Lixeiras Críticas:</Text>
          <Text style={styles.statValue}>{lixeirasCriticas}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Rota ativa:</Text>
          <Text style={[styles.statValue, { color: '#2ecc71' }]}>Não Iniciada</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Mapa' as never)}>
        <Text style={styles.mapButtonText}>📍 Ver Mapa de Lixeiras</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Lixeiras <Text style={styles.verTodas}>Ver Todas</Text></Text>
      <View style={styles.lixeiraList}>
        {coletas.map((lixeira, index) => (
          <View key={index} style={styles.lixeiraItem}>
            <Text style={styles.lixeiraText}>
              Lixeira {lixeira.lixeiraId}{"\n"}{lixeira.endereco}{"\n"}{lixeira.status}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Alertas Recentes</Text>
      <View style={styles.alertBox}>
        <Text style={styles.alertText}>⚠️ Sensor Offline: Lixeira A45</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;