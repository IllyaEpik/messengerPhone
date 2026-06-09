import { View } from "react-native";
import { Stack } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import { FriendsProvider } from "@/modules/friends/context/storage";
import { ContactsProvider } from "@/modules/chat/context/contactsContext";

export default function Layout() {
  return (
    <FriendsProvider>
    <Stack screenOptions={{
                
          headerShown:true,
          header: () => <Header isCreatePostHidden={true} isSettingsHidden={true} />,
                }}>
        <Stack.Screen name='index'></Stack.Screen>
        <Stack.Screen name='[action]/[id]'></Stack.Screen>
    </Stack>
    </FriendsProvider>
  );
}