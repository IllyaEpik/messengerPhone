import { View } from "react-native";
import {styles} from "@/shared/styles/menu";
import { AuthOption } from "../../modules/auth/components/auth";
import { Menu } from "@/shared/components/menu/ui/menu";

export default function RegisterScreen() {

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Menu 
          firstOption= {<AuthOption authType="register" />}
          secondOption= {<AuthOption authType="login" />}
          firstText="Реєстрація"
          secondText="Авторизація"
          containerStyles={{flex:0}}
        />
      </View> 
    </View>
  );
}