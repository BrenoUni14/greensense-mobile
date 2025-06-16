import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#fff',
  },
  greetingBold: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#c4c3c9',
    padding: 8,
    borderRadius: 6,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  cardsContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#201f24',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardLeftText: {
    fontSize: 16,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardRightText: {
    fontSize: 16,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  binItem: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  binText: {
    fontSize: 16,
    color: '#fff',
  },
  green: {
    backgroundColor: '#2ecc71',
  },
  yellow: {
    backgroundColor: '#f1c40f',
  },
  red: {
    backgroundColor: '#e74c3c',
  },
});