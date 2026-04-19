import { Text, View, Image, ScrollView } from "react-native";
import { Avatars } from "./avatars";
import { Footer } from "./footer";
import { styles } from "../styles/avatars";



export function Albums(){
  return (
    <View>
        <ScrollView>
            <Avatars/>
            <Footer/>
        </ScrollView>
        {/* <View style={styles.empty}/> */}
    </View>
  );
};
