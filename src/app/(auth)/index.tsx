import { View, Text } from "react-native";
import { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { styles } from "./register.styles";
import { AuthOption } from "../../modules/auth/components/auth";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { Menu } from "@/shared/components/menu/ui/menu";

export default function RegisterScreen() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* <Text style={styles.title}>Реєстрація</Text> */}
        {/* <Text style={styles.subtitle}>
          Приєднуйся до World IT
        </Text> */}
        <Menu 
          firstOption= {<AuthOption authType="register" />}
          secondOption= {<AuthOption authType="login" />}
          firstText="Реєстрація"
          secondText="Авторизація"
        />
      </View>
    </View>
  );
}