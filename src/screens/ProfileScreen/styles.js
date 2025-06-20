import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  profileLabel: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 4,
  },
  profileText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 12,
  },
  signOutButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});