import { Pressable, Text, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  onPress?: () => void;
}

export const Button = ({ title, icon, onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: 108,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});