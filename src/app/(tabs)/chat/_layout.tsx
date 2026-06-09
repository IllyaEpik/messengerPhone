import { View } from "react-native";
import { Stack } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import { ContactsProvider } from "@/modules/chat/context/contactsContext";

export default function Layout() {
  return (
  
    <ContactsProvider>
    <Stack screenOptions={{
                headerShown:true,
                header: () => <Header isChat isSettingsHidden/>,
                
                }}>
        <Stack.Screen name='index'></Stack.Screen>
        <Stack.Screen name='[id]/chat'></Stack.Screen>
    </Stack>
    </ContactsProvider>
  );
}