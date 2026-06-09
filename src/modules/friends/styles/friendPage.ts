import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 24,
		paddingTop: 40,
		borderColor: "#CDCED2",
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 5,
		height: "100%",
	},
	header: {
		height: 48,
		justifyContent: "center",
	},
	backButton: {
		padding: 8,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	chevronLeft: {
		width: 12,
		height: 12,
		borderColor: "#8E8E93",
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		transform: [{ rotate: "45deg" }],
	},
	profileSection: {
		alignItems: "center",
		marginTop: 20,
	},
	avatarContainer: {
		position: "relative",
		marginBottom: 24,
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "#E5E5EA",
	},
	statusBadge: {
		position: "absolute",
		bottom: 2,
		right: 5,
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: "#C4C4C4",
		borderWidth: 3,
		borderColor: "#FFFFFF",
	},
	nameText: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#050A1E",
		fontFamily: "GTMedium", // Fallback to system font if not loaded globally
		marginBottom: 8,
	},
	handleText: {
		fontSize: 18,
		fontWeight: "600",
		color: "#050A1E",
		marginBottom: 32,
	},
	statsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 12,
		marginBottom: 40,
	},
	statBox: {
		flex: 1,
		alignItems: "center",
	},
	statNumber: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#050A1E",
		marginBottom: 6,
	},
	statLabel: {
		fontSize: 16,
		color: "#8A8A8F",
		fontWeight: "500",
	},
	divider: {
		width: 1,
		height: 40,
		backgroundColor: "#E5E5EA",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 16,
		marginTop: "auto",
		marginBottom: 24,
	},
	actionButton: {
		flex: 1, // Ensures both buttons split the width evenly
		marginTop: 0, // Overriding the default layout margin from RegBut styles
	},
	deleteButtonOutline: {
		borderWidth: 1,
		borderColor: "#5B3F4C",
	},
	deactiveText: {
		color: "#81818D",
		margin: 10,
	},
});
