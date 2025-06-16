import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#000',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 16,
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  statLabel: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 20,
    color: '#2ecc71',
    fontWeight: 'bold',
    marginTop: 8,
  },
  mapButton: {
    backgroundColor: '#2ecc71',
    padding: 14,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  verTodas: {
    fontSize: 14,
    color: '#2ecc71',
  },
  lixeiraList: {
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  lixeiraItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    paddingVertical: 8,
  },
  lixeiraText: {
    color: '#ccc',
    fontSize: 14,
  },
  alertBox: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 10,
    marginBottom: 30,
  },
  alertText: {
    color: '#f1c40f',
  },
});
