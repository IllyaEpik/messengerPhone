import React from "react";
import { Pressable, PressableProps, StyleProp, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { styles } from "./RegBut.styles";

interface Props {
  title: string;
  onPress: () => void;
  Buttonstyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
}

export const RegButton = (props: Props) => {
  const {
    title,
    onPress,
    Buttonstyle,
    TextStyle
  } = props
  return (
    <Pressable style={[styles.button, Buttonstyle ?? {}]} onPress={onPress}>
      <Text style={[styles.text, TextStyle ?? {}]}>{title}</Text>
    </Pressable>
  );
};