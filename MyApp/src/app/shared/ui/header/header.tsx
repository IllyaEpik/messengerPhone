import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WORLD IT</Text>

      <View style={styles.actions}>
        <Pressable onPress={() => router.push("/posts")}>
          <Text>post</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/friends")}>
          <Text>friend</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/chats")}>
          <Text>chat</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  actions: {
    flexDirection: "row",
    gap: 15,
  },
});