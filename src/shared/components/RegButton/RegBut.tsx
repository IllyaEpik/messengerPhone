import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./RegBut.styles";

interface Props {
  title: string;
  onPress: () => void;
  Buttonstyle?: object;
}

export const RegButton = ({ title, onPress, Buttonstyle }: Props) => {
  return (
    <Pressable style={[styles.button, Buttonstyle ?? {}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};