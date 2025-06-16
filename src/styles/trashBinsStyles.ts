import { StyleSheet } from 'react-native';

const trashBinsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  filterIcon: {
    color: '#2ecc71',
    fontSize: 24,
  },
  red: {
    backgroundColor: '#e74c3c',
  },
  yellow: {
    backgroundColor: '#f1c40f',
  },
  green: {
    backgroundColor: '#2ecc71',
  },
  greeting: {
    fontSize: 18,
    color: '#fff',
  },
  greetingBold: {
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  logoutButton: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#e74c3c',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  binCard: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  binHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  binLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  binDate: {
    fontSize: 12,
    color: '#aaa',
  },
  binLevelBarContainer: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
    marginTop: 10,
    overflow: 'hidden',
  },
  binLevelBar: {
    height: '100%',
    borderRadius: 5,
  },
  binLevelLow: {
    backgroundColor: '#2ecc71',
    width: '30%',
  },
  binLevelMedium: {
    backgroundColor: '#f1c40f',
    width: '60%',
  },
  binLevelHigh: {
    backgroundColor: '#e74c3c',
    width: '90%',
  },
  binText: {
    fontSize: 14,
    color: '#ccc',
  },
  binItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#222',
  },
});

export default trashBinsStyles;