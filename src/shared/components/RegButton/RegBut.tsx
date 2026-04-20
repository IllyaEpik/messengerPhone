import React from "react";
import { Pressable, PressableProps, StyleProp, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { styles } from "./RegBut.styles";

interface Props {
  title: string;
  onPress: () => void;
  Buttonstyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  invisible?: boolean;
}

export const RegButton = (props: Props) => {
  const {
    title,
    onPress,
    Buttonstyle,
    TextStyle,
    invisible
  } = props
  return (
    <Pressable style={[styles.button, invisible && styles.invisbleButton, Buttonstyle ?? {}]} onPress={onPress}>
      <Text style={[styles.text, invisible && styles.invisbleText, TextStyle ?? {}]}>{title}</Text>
    </Pressable>
  );
};