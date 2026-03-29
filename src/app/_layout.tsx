import { ScrollView, View } from "react-native";
import { Slot, Stack, Tabs } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import Footer from "@/shared/components/footer/ui/footer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HouseIcon } from "@/shared/static/icons/_icons/house";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { PeopleIcon } from "@/shared/static/icons/_icons/people";
import { PublicIcon } from "@/shared/static/icons/_icons/publics";
import FooterTab from "@/shared/components/footer/ui/footerTab";
//   const Tab = createBottomTabNavigator()
export default function Layout() {

  return (
  
    <SafeAreaProvider  style={{ flex: 1 }}> 
      <SafeAreaView  style={{ flex: 1 }}>
		<Tabs screenOptions={{ 
			tabBarActiveTintColor: '#070A1C',
			headerShown:true,
			header: () => <Header />,
      tabBarInactiveTintColor: "#070A1C",

			 }}>
		
		<Tabs.Screen name="index" 
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<HouseIcon/>}/>
        ),
        }}/>  
		
		<Tabs.Screen name="chat" 
        options={{
          title: "Chat",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<ChatIcon/>}/>
        ),
        }}/>

		<Tabs.Screen name="friends" 
        options={{
          title: "friends",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<PeopleIcon/>}/>
        ),
        }}/> 
		
		<Tabs.Screen name="publics" 
        options={{
          title: "publics",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<PublicIcon/>}/>
        ),
        }}/>

		</Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}