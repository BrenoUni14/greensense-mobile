import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    width: 200,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: -150,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#66CC00',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 15,
  },
  outlineButton: {
    borderColor: '#66CC00',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  outlineButtonText: {
    color: '#66CC00',
    fontWeight: 'bold',
    fontSize: 16,
  },
});