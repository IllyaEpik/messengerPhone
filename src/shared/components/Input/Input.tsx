import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./Input.styles";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secure = false,
}: Props) => {
  const [hidden, setHidden] = useState(secure);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidden}
        style={styles.input}
      />

      {secure && (
        <TouchableOpacity onPress={() => setHidden(!hidden)}>
        </TouchableOpacity>
      )}
    </View>
  );
};