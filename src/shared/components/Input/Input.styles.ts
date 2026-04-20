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
    backgroundColor: "#FFFFFF"
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#070A1C",
    fontFamily:"GTRegular",
    lineHeight:22
  },
  error: {
    color: "#FF4C4C",
      fontFamily:"GTRegular",
    fontSize: 13,
    marginTop:-10
  },
  label:{
      fontFamily:"GTRegular",
      fontSize:16
  },
  containerWithError: {
    borderColor:"#FF4C4C",
	borderWidth:1,
	borderStyle:"solid"
  }

});