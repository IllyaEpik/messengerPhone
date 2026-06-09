import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 20,
		width: "100%", // Centers nicely on device screens
		alignSelf: "center",
		marginTop: 20,
		// Soft shadows for iOS & Android
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.05,
		shadowRadius: 10,
		// elevation: 3,
	},
	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	iconPlaceholder: {
		width: 24,
		height: 24,
		borderRadius: 6,
		backgroundColor: "#EAEAEA", // Replace this block with your actual Image/SVG icon
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "600",
		color: "#3A3F47",
	},
	seeAllText: {
		fontSize: 15,
		fontWeight: "600",
		color: "#5C3A4E", // Dark burgundy tint from screenshot
	},
	divider: {
		height: 1,
		backgroundColor: "#CDCED2",
		marginBottom: 16,
	},
	textSection: {
		marginBottom: 12,
	},
	albumCategory: {
		fontSize: 16,
		fontWeight: "700",
		color: "#0A0E1A",
		marginBottom: 4,
	},
	albumMetaRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	albumTitle: {
		fontSize: 16,
		color: "#0A0E1A",
		fontWeight: "400",
	},
	albumYear: {
		fontSize: 16,
		color: "#A0A5B0", // Muted gray text
	},
	coverImage: {
		width: "100%",
		height: 190, // Adjust depending on desired aspect ratio
		borderRadius: 14,
	},
	deactiveText: {
		color: "#81818D",
	},
});
