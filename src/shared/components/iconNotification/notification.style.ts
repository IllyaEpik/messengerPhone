import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	avatar: {
		// width: 15,
		// height: 15,
		borderRadius: 50,
	},
	statusBadge: {
		position: "absolute",
		top: -3,
		right: -3,
		width: 15,
		height: 15,
		borderRadius: 9999,
		backgroundColor: "#FF4C4C",
		borderWidth: 2.25,
		borderColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	avatarContainer: {
		position: "relative",
		// marginBottom: 20,
	},
	text: {
		color: "white",
		fontSize: 10,
		height: 12,
		fontFamily: "GTMedium"
	},
	hidden: {
		display: "none",
	},
});
