import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#2ecc71',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});