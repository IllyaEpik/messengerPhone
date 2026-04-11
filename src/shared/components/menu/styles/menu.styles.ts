
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menu:{
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "space-evenly",
    // marginBottom: 20
  },
  active:{
    color:"#070A1C",
    borderBottomWidth: 1,
    borderBottomColor:"#543C52",
    fontSize: 25
  },
  deactive:{
    color:"#81818D",
    fontSize: 25
  }
});
