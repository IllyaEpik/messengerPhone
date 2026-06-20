import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	// menuCard: {
	// 	backgroundColor: "#E9E5EE",
	// 	borderRadius: 16,
	// 	paddingVertical: 8,
	// 	width: 280,
	// 	elevation: 4,
	// 	shadowColor: "#000",
	// 	shadowOffset: { width: 0, height: 2 },
	// 	shadowOpacity: 0.1,
	// 	shadowRadius: 8,
	// },
	// menuItem: {
	// 	flexDirection: "row",
	// 	alignItems: "center",
	// 	paddingVertical: 12,
	// 	paddingHorizontal: 16,
	// },
	// iconContainer: {
	// 	marginRight: 12,
	// 	width: 24,
	// 	alignItems: "center",
	// },
	// menuText: {
	// 	fontSize: 14,
	// 	color: "#1C1B1F",
	// 	fontWeight: "500",
	// },
	// divider: {
	// 	height: 1,
	// 	backgroundColor: "rgba(0,0,0,0.08)",
	// 	marginVertical: 4,
	// 	marginHorizontal: 16,
	// },

	menuCard: {
		backgroundColor: "#E9E5EE", // The lavender/grey from your image
		borderRadius: 16,
		width: 280,
		elevation: 4, // Android shadow
		shadowColor: "#000", // iOS shadow
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		marginTop: -52,
		marginRight: -16,
	},
	menuItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	iconContainer: {
		marginRight: 12,
		width: 24,
		alignItems: "center",
	},
	menuText: {
		fontSize: 14,
		color: "#1C1B1F",
		fontWeight: "500",
	},
	divider: {
		height: 1,
		backgroundColor: "rgba(0,0,0,0.08)",
		marginVertical: 4,
		marginHorizontal: 16,
	},
	copy: {
		justifyContent: "flex-start",
		flexDirection: "row-reverse",
	},
});
