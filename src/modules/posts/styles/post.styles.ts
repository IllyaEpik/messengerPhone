import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
  card: { 
    backgroundColor: '#fff',
     borderRadius: 16, 
     padding: 16,
      margin: 16 
    },
  title: { 
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4 
  },
  topic: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 4 

  },
  content: { 
    fontSize: 14, 
    marginBottom: 4 
},
  link: { 
    color: '#007AFF', 
    fontSize: 12, 
    marginBottom: 4 
},

  imagesRow: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginBottom: 8 },
  image: { width: 80, 
    height: 60, 
    borderRadius: 8,
    marginRight: 8, 
    marginBottom: 8 
    },
});
