
import { Tabs } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseApi } from "@/shared/api/baseApi";
import { AuthProvider } from "@/modules/auth/context/authContext";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
//   const Tab = createBottomTabNavigator()
export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    'GTLight': require('../../assets/fonts/font/GTWalsheimPro-Light.ttf'),
    'GTRegular': require('../../assets/fonts/font/GTWalsheimPro-Regular.ttf'),
    'GTMedium': require('../../assets/fonts/font/GTWalsheimPro-Medium.ttf'),
    'GTBold': require('../../assets/fonts/font/GTWalsheimPro-Bold.ttf'),
    'GTBlack': require('../../assets/fonts/font/GTWalsheimPro-superBold.ttf'),
    'GTUltraBold': require('../../assets/fonts/font/GTWalsheimPro-UltraBold.ttf')
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider  style={{ flex: 1 }}> 
      <SafeAreaView  style={{ flex: 1 }}>
        <ApiProvider api={baseApi} >
      <AuthProvider>
		<Tabs screenOptions={{ 
			tabBarActiveTintColor: '#070A1C',
			headerShown:false,
			header: () => <Header />,
      tabBarInactiveTintColor: "#070A1C",
      tabBarStyle: { display: "none" }
			 }}>
		
    <Tabs.Screen 
      name="index" 
      options={{
        href: null
      }} 
    />
    
    <Tabs.Screen 
      name="(auth)" 
      options={{
        href: null
      }} 
    />
    <Tabs.Screen 
      name="(tabs)" 
      options={{
        href: null
      }} 
    />
		</Tabs>
    </AuthProvider>
    </ApiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}