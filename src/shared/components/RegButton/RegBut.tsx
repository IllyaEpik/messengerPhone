import React from "react";
import { Pressable, PressableProps, StyleProp, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { styles } from "./RegBut.styles";

interface Props {
  title: string;
  onPress: () => void;
  Buttonstyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  invisible?: boolean;
  disabled?: boolean
}

export const RegButton = (props: Props) => {
  const {
    title,
    onPress,
    Buttonstyle,
    TextStyle,
    invisible,
    disabled
  } = props
  return (
    <Pressable style={[styles.button, invisible && styles.invisbleButton, Buttonstyle ?? {}, disabled ? styles.disabledButton : {}]} disabled={disabled} onPress={onPress}>
      <Text style={[styles.text, invisible && styles.invisbleText, TextStyle ?? {}]}>{title}</Text>
    </Pressable>
  );
};