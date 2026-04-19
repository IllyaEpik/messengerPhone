import { Menu } from "@/shared/components/menu/ui/menu";
import { View, Text } from "react-native";
import {styles} from "@/shared/styles/menu";
import { Profile } from "@/modules/profile/components/profile";
import { Albums } from "@/modules/albums/components/albums";

export default function ProfileScreen() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");

  return (
    <View style={styles.screen}>
          {/* <View style={styles.card}> */}
            <Menu 
              firstOption= {<Profile />}
              secondOption= {<Albums />}
              firstText="Personal information"
              secondText="Albums"
              menuStyles={{justifyContent:"flex-start"}}
            />
          {/* </View> */}
        </View>
  );
}