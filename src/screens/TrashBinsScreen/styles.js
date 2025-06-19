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
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  trashItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  trashName: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 2,
  },
  trashLevel: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
  
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  
  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 8,
    borderRadius: 8,
  },
});