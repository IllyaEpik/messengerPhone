

import { Redirect, router, Tabs } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import Footer from "@/shared/components/footer/ui/footer";
import { HouseIcon } from "@/shared/static/icons/_icons/house";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { PeopleIcon } from "@/shared/static/icons/_icons/people";
import { PublicIcon } from "@/shared/static/icons/_icons/publics";
import FooterTab from "@/shared/components/footer/ui/footerTab";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { CreateProfileModal } from "@/modules/auth/components/profileModal";
import { PaperProvider } from "react-native-paper";
//   const Tab = createBottomTabNavigator()
export default function Layout() {
  
  return (
    <PaperProvider>
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#070A1C',
            headerShown:true,
            header: () => <Header />,
      tabBarInactiveTintColor: "#070A1C",

             }}>
        
        <Tabs.Screen name="index" 
        options={{
          title: "Головна",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<HouseIcon/>}/>
        ),
        }}/>  
        
        <Tabs.Screen name="chat" 
        options={{
          title: "Чати",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<ChatIcon/>}/>
        ),
        }}/>

        <Tabs.Screen name="friends" 
        options={{
          title: "Друзі",
          tabBarIcon: ({ focused }) => (
          <FooterTab selected={focused} icon={<PeopleIcon/>}/>
        ),
        }}/> 
        
        <Tabs.Screen name="publics" 
            options={{
              title: "Мої публікації",
              tabBarIcon: ({ focused }) => (
              <FooterTab selected={focused} icon={<PublicIcon/>}/>
            ),
        }}/>
    {/* <Tabs.Screen 
      name="(auth)" 
      options={{
        href: null
      }} 
    /> */}
    <Tabs.Screen 
      name="profile" 
      options={{
        href: null
      }} 
    />
        </Tabs>
        </PaperProvider>
  );
}