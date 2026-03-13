import { Tabs } from "expo-router";
import Header from "../../app/shared/ui/header/header";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Головна" }} />
      <Tabs.Screen name="posts" options={{ title: "Мої публікації" }} />
      <Tabs.Screen name="friends" options={{ title: "Друзі" }} />
      <Tabs.Screen name="chats" options={{ title: "Чати" }} />
    </Tabs>
  );
}