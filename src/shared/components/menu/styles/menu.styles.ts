
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menu:{
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems:"center"
    // marginBottom: 10,
    // marginTop: 10
  },
  active:{
    color:"#070A1C",
    borderBottomWidth: 2,
    borderBottomColor:"#543C52",
    fontWeight:700
  },
  deactive:{
    color:"#81818D"
  },
  text:{
    fontFamily:"GTRegular",
    fontWeight:500,
    fontSize: 25,
    textAlignVertical:"center"
  }
});
