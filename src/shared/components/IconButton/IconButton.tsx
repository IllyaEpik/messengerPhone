import { Pressable, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onPress?: () => void;
  variant?: "outline" | "filled";
}

export const IconButton = ({ children, onPress, variant = "outline" }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        variant === "filled" && styles.filled
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff"
  },

  filled: {
    backgroundColor: "#F2F2F2",
  }

})