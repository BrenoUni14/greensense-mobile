import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from '../styles/registerStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Senhas não conferem')
    .required('Confirmação obrigatória'),
});

const RegisterScreen = ({ navigation }: any) => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: values.name,
          email: values.email,
          senha: values.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar');
      }

      const data = await response.json();
      // Esperado: { token, id, nome }
      login(data.token, data.id, data.nome);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao registrar. Verifique os dados ou tente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Registrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Já tem conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default RegisterScreen;