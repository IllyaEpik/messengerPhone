import { Text, View, Image } from "react-native";
import { styles } from "../styles/avatars";
import { ICONS } from "@/shared/static/icons";

export function Footer(){
  return (
    <View style= {styles.card}>
        <View style={styles.header}>
            <Text style = {styles.noOne}>Немає ще жодного альбому</Text>
            <View style={styles.publicButton}>
                <ICONS.PlusIcon/>
            </View>
        </View>
    </View>
  );
};
