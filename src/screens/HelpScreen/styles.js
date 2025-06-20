import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 24,
    marginBottom: 24,
    fontWeight: '600',
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#23232A',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '500',
  },
  cardDescription: {
    color: '#AAA',
    fontSize: 14,
  },
  icon: {
    fontSize: 24,
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#44AA00',
    fontSize: 16,
  },
});