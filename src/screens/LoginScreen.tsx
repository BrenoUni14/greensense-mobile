import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/loginStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

const LoginScreen = ({ navigation }: any) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log('🔐 Login enviado:', values);
        // Aqui futuramente chamaremos o backend para autenticar
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>GreenSense</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
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

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
