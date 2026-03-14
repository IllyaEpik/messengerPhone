import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Footer() {
  return (
    <View
      style={{
        height: 60,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => router.push("/")}>
        <Text>Home</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/posts")}>
        <Text>Posts</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/friends")}>
        <Text>Friends</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/chats")}>
        <Text>Chats</Text>
      </Pressable>
    </View>
  );
}
