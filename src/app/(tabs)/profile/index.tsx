import { Menu } from "@/shared/components/menu/ui/menu";
import { View, Text } from "react-native";
import {styles} from "@/shared/styles/menu";
import { Profile } from "@/modules/profile/components/profile";
import { Albums } from "@/modules/albums/components/albums";

export default function ProfileScreen() {

  return (
    <View style={styles.screen}>
            <Menu 
              firstOption= {<Profile />}
              secondOption= {<Albums />}
              firstText="Особиста інформація"
              secondText="Альбоми"
              menuStyles={{
                justifyContent:"flex-start", 
                marginLeft:20,
                paddingVertical:20,
                gap:16
              }}
              textStyles={{
                fontSize:17
              }}
            />
        </View>
  );
}