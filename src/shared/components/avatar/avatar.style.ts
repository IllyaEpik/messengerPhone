import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	avatar: {
		width: 96,
		height: 96,
		borderRadius: 50,
	},
	statusBadge: {
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 18,
		height: 18,
		borderRadius: 9999,
		backgroundColor: "#CDCED2",
		borderWidth: 2.25,
		borderColor: "#FFFFFF",
	},
	activeStatusBadge: {
		backgroundColor: "#22C55E",

	},
	avatarContainer: {
		position: "relative"
		// marginBottom: 20,
	},
});
