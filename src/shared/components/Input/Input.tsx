import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";

import { styles } from "./Input.styles";

interface Props extends React.ComponentProps<typeof TextInput> {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  label: string,
  error:string | undefined
  containerInputStyles?:StyleProp<ViewStyle>
}

export const Input = (props: Props) => {
  const {
    placeholder,
    value,
    onChangeText,
    secure = false,
    label,
    error,
    style,
    containerInputStyles,
    ...other
  } = props;
  const [hidden, setHidden] = useState(secure);

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, error ? styles.containerWithError : {}, containerInputStyles]}>
        <TextInput
          placeholder={placeholder}
          // placeholderTextColor="#A0A0A0"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          style={[styles.input, style]}
          
          {...other}
          
        />

        {secure && (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};