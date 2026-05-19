import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const chatNames: Record<string, string> = {
  "1": "Jane Cooper",
  "2": "Cameron Williamson",
  "3": "Leslie Alexander",
  "4": "Robert Fox",
  "5": "Jacob Jones",
  "6": "Brooklyn Simmons",
  g1: "New Group",
  g2: "Ann Ti",
  g3: "Ness Ty",
};

export default function ChatDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const chatId = String(params.id || "");
  const title = chatNames[chatId] || "Чат";

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Відкрийте чат, щоб побачити повідомлення</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>Поки що тут немає повідомлень.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  backText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B314F",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1D1D1F",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#7A7A85",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  placeholder: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    color: "#6B6B7B",
    fontSize: 15,
    textAlign: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 20,
    elevation: 2,
  },
});
