import { Text, View, Image } from "react-native";
import { styles } from "../styles/avatars";
import { ICONS } from "@/shared/static/icons";

export function Avatars(){
  return (
    <View style= {styles.card}>
        <View style={styles.header}>
            <Text style= {styles.photo}>Мої фото</Text>
            <View style={styles.publicButton}>
                <ICONS.PublicIcon/>
                <Text style= {styles.add}>Додати фото</Text>
            </View>
        </View>
        <View style={styles.avatars}>

            <Image
                style={styles.icon} 
                source={require("../../../media/icon/user.png")} 
                resizeMode="contain"
            />
            <Image
                style={styles.icon} 
                source={require("../../../media/icon/user.png")} 
                resizeMode="contain"
            />
            <Image
                style={styles.icon} 
                source={require("../../../media/icon/user.png")} 
                resizeMode="contain"
            />
        </View>
    </View>
  );
};
