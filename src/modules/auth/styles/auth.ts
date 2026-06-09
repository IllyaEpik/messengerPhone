import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "700",
		marginBottom: 4,
		color: "#000",
		fontFamily: "GTRegular",
	},

	subtitle: {
		fontSize: 24,
		textAlign: "center",
		// marginBottom: 5,
		color: "#070A1C",
		fontFamily: "GTMedium",
		fontStyle: "normal",
		lineHeight: 100,
		letterSpacing: -1,
		marginTop: -15,
	},
	button: {
		width: "100%",
	},
	inputs: {
		gap: 10,
		position: "relative",
		flexDirection: "column",
		minHeight: 150, // This ensures the container stays open
		width: "100%",
		flex: 0,
	},
	buttonText: {
		fontSize: 16,
	},
});
