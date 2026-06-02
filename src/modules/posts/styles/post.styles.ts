import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
  card: { 
    backgroundColor: '#fff',
     borderRadius: 16, 
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
    fontSize: 14, 
    marginBottom: 4,
    textDecorationLine: 'underline'
  },
  linksBlock: {
    marginBottom: 8,
    gap: 4
  },

	imagesRow: { 
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		marginBottom: 8 
	},
	image: { 
		width: 150, 
		height: 100,
		// flex:1,
		borderRadius: 8,
		marginRight: 8, 
		marginBottom: 8 
	},
	icon:{
		width:40,
		height:40,
		borderRadius:50
	},
	iconWithTitle: {
		flexDirection:"row",
		alignItems:"center",
		gap:10
	},
	header:{
		borderTopRightRadius: 16,
		borderTopLeftRadius: 16,
		borderColor:"#CDCED2",
		borderWidth:1,
		width:"100%",
     	padding: 16,
	},
	topHeaderLine:{
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",

	},
	signature:{
		height:50,
		width:100,
	},
	contentBlock: {
		padding:16,
		borderBottomRightRadius: 16,
		borderBottomLeftRadius: 16,
		borderColor:"#CDCED2",
		borderWidth:1,
	},
	footer: {
		flexDirection:"row",
		gap:16,
		// padding:16,
		flexWrap:"wrap"
	},
	footerItem: {
		flexDirection:"row",
		gap:8,
		alignItems:"center"
	}
});
