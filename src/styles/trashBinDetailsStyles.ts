import { StyleSheet } from 'react-native';

const trashBinDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    justifyContent: 'center',
  },
  loading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#aaa',
  },
  value: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },

  fillCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  fillCard: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  gray: {
    backgroundColor: '#555',
  },
  red: {
    backgroundColor: '#e74c3c',
  },
  fillText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoLabel: {
    color: '#aaa',
    fontWeight: 'bold',
  },
  infoValue: {
    color: '#fff',
  },
  collectButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },
  collectButtonActive: {
    backgroundColor: '#2ecc71',
  },
  collectButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  addressCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  addressText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    padding: 8,
    alignSelf: 'flex-start',
  },
});

export default trashBinDetailsStyles;