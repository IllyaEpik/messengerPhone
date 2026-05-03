import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
        width: 408,
        height: 263,
        gap: 16,
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 16,
        paddingBottom: 16,

  },

  name: {
    fontSize: 24,
    fontFamily: "GTBold",
  },
  username: {
    fontFamily: "GTMedium",
    fontSize: 14,
  },
  buttons: {
    width: 408,
    height: 40,
    gap: 16,


  },
  primaryBtn: {
        width: 111,
        height: 40,
        gap: 8,
        borderRadius: 1234,
        paddingTop: 10,
        paddingRight: 16,
        paddingBottom: 10,
        paddingLeft: 16,
        backgroundColor: "#543C52",

  },
  secondaryBtn: {
        width: 94,
        height: 40,
        gap: 8,

        borderRadius: 1234,
        borderWidth: 1,
        paddingTop: 10,
        paddingRight: 16,
        paddingBottom: 10,
        paddingLeft: 16,
        
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#5B3E5E",
  },
});