import { View, Text } from "react-native";
import { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { styles } from "./register.styles";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Реєстрація</Text>
        <Text style={styles.subtitle}>
          Приєднуйся до World IT
        </Text>

        <Input
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Введи пароль"
          value={password}
          onChangeText={setPassword}
          secure
        />

        <Input
          placeholder="Повтори пароль"
          value={confirm}
          onChangeText={setConfirm}
          secure
        />

        <Button title="Створити акаунт" onPress={() => {}} />
      </View>
    </View>
  );
}