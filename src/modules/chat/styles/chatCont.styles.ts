import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",

		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderTopColor: "#CDCED2",
		borderTopWidth: 1,
	},

	tabs: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",

		backgroundColor: "white",
		paddingHorizontal: 16,
		height: 54,

		// borderBottomWidth: 1,
		// borderBottomColor: "#E7E7E7",

		// marginBottom: 20,
	},

	tab: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

		borderTopWidth: 2,
		borderTopColor: "transparent",

		paddingHorizontal: 5,
	},

	activeTab: {
		borderTopColor: "#4B314F",
	},

	// activeTabText: {
	// color: "#070A1C",
	// fontSize: 13,
	// },

	tabText: {
		// color: "#81818D",
		color: "#070A1C",
		fontSize: 14,
		fontWeight: "500",
		fontFamily: "GTMedium",
	},
	titleBlock: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 8,
		paddingBottom: 16,
	},
	title: {
		fontSize: 20,
		fontFamily: "GTMedium",
		color: "#81818D",

		// marginBottom: 16,
	},
	searchInputContainer: {
		height: 40,
		// marginVertical:10,
		marginBottom: 20,
	},
	searchInput: {
		marginHorizontal: 16,
	},

	list: {
		paddingHorizontal: 16,
		paddingBottom: 20,
	},

	contactItem: {
		flexDirection: "row",
		alignItems: "center",

		marginBottom: 22,
	},

	groupItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 4,
		paddingHorizontal: 4,
		// backgroundColor: "#FFFFFF",
		borderRadius: 18,
		marginBottom: 16,
		marginHorizontal: 0,
	},

	groupAvatar: {
		width: 52,
		height: 52,
		borderRadius: 26,
		backgroundColor: "#4B314F",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 14,
	},

	groupAvatarText: {
		color: "#FFFFFF",
		fontWeight: "700",
		fontSize: 16,
		fontFamily: "GTMedium",
	},

	groupInfo: {
		flex: 1,
	},

	groupHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 4,
	},

	groupMessage: {
		color: "#6B6B7B",
		fontSize: 14,
		fontFamily: "GTRegular",
	},

	groupTime: {
		color: "#9E9EAF",
		fontSize: 12,
		fontFamily: "GTRegular",
	},

	avatar: {
		width: 52,
		height: 52,
		borderRadius: 26,

		marginRight: 14,
	},

	contactName: {
		fontSize: 16,
		color: "#111827",
		fontFamily: "GTMedium",
	},

	placeholderBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 24,
	},

	placeholderText: {
		color: "#777",
		fontSize: 16,
	},
});
