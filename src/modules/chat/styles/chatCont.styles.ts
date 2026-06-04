
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    paddingHorizontal: 16,
    height: 54,

    // borderBottomWidth: 1,
    // borderBottomColor: "#E7E7E7",

    marginBottom: 20,
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
    fontFamily: "GTMedium"
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#4F4F4F",

    paddingHorizontal: 16,
    marginBottom: 16,
  },

  searchInput: {
    height: 46,
    backgroundColor: "#FFFFFF",

    marginHorizontal: 16,
    marginBottom: 24,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",

    paddingHorizontal: 16,

    fontSize: 14,
    color: "#111",
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
  },

  groupTime: {
    color: "#9E9EAF",
    fontSize: 12,
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
    fontWeight: "500",
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