// src/screens/RevisionsScreen/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 20,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 24,
    marginBottom: 16,
    fontWeight: '600',
  },
  list: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#23232A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  cardDescription: {
    color: '#AAA',
    fontSize: 14,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 12,
  },
  button: {
    padding: 8,
  },
  addButton: {
    backgroundColor: '#44AA00',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});