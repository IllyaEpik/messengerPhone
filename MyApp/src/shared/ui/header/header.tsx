import { View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        height: 60,
        borderBottomWidth: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        WORLD IT
      </Text>
    </View>
  );
}
