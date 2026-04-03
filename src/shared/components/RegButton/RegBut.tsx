import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./RegBut.styles";

interface Props {
  title: string;
  onPress: () => void;
}

export const RegButton = ({ title, onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};