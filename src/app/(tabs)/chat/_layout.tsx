import { View } from "react-native";
import { Stack } from "expo-router";

import Header from "@/shared/components/header/ui/header";

export default function Layout() {
  return (
  
    <Stack screenOptions={{
                headerShown:true,
                header: () => <Header isChat isSettingsHidden/>,
                
                }}>
        <Stack.Screen name='index'></Stack.Screen>
        <Stack.Screen name='[id]/chat'></Stack.Screen>
    </Stack>
  );
}