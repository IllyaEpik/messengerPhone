import { StyleSheet } from "react-native";

export const createPostModalStyles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.3)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		width: "90%",
		backgroundColor: "#fff",
		borderRadius: 20,
		padding: 20,
	},
	closeButton: {
		cursor:"pointer"
	},
	closeButtonText: {
		fontSize: 22,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "left",
		fontFamily:"GTMedium"
	},
	tagsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		// marginBottom: 16,
		gap: 10,
	},
	tag: {
		backgroundColor: "#E9E5EE",
		borderRadius: 8,
		padding: 6
	},
	tagText: {
		color: "#543C52",
	},
	textarea: {
		minHeight: 60,
		height: "auto",
	},
	submitButton: {
		backgroundColor: "#543C52",
		paddingTop: 10,
		paddingRight: 16,
		paddingBottom: 10,
		paddingLeft: 16,
		gap: 8,
		borderRadius: 1234,
		justifyContent: "center",
    alignItems: "center",
	flexDirection:"row"


	},
	submitButtonText: {
		color: "#FFFFFF",
		fontWeight: "bold",
		fontSize: 16,
		
	},
	plusButton:{
        padding: 3,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 2,
        borderStyle: "solid",
        flexDirection: "row",
        alignSelf:"center"

    },
	buttonIcon: {
		padding: 10,
    	backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 2,
        borderStyle: "solid",
        flexDirection: "row",
        alignSelf:"center"
	},
    buttonsContainer:{
		flex:1,
		flexDirection:"row",
		justifyContent:"flex-end",
		gap: 10,
		marginTop:16
    },
	fullInput:{
		flexDirection: "row"
	},
	buttonContainer: {
		width: "100%",
		height: 20,
		position: "relative",
		flexDirection: "row-reverse",
		textAlign: "center"
	},
	scrollView:{
		gap:16
	},
	image:{
		width:"100%",
		height:"100%",
		borderRadius:25
	},
	imageContainer:{
		position:"relative",
		width:"100%",
		height:225
	},
	trashIcon:{
		position:"absolute",
		top:10,
		right:10
	}
});
