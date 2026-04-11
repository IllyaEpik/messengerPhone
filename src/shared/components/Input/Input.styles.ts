import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#FAFAFA",
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10
  }
});