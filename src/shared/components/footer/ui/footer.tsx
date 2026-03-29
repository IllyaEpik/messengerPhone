  import { View, Text, Pressable } from "react-native";
  import { router } from "expo-router";

  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
  import FooterTab from "./footerTab";
  import { HouseIcon } from "../../../static/icons/_icons/house";

  const Tab = createBottomTabNavigator()

  export default function Footer() {
    return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato' }}>
        <Tab.Screen name="index" options={{title: "main"}} component={HouseIcon}/>
      </Tab.Navigator>
      // <View
      //   style={{
      //     height: 60,
      //     borderTopWidth: 1,
      //     flexDirection: "row",
      //     justifyContent: "space-around",
      //     alignItems: "center",
      //     flex:1
      //   }}
      // >
      //   <Pressable onPress={() => router.push("/")}>
      //     <Text>Home</Text>
      //   </Pressable>

      //   <Pressable onPress={() => router.push("/posts")}>
      //     <Text>Posts</Text>
      //   </Pressable>

      //   <Pressable onPress={() => router.push("/friends")}>
      //     <Text>Friends</Text>
      //   </Pressable>

      //   <Pressable onPress={() => router.push("/chats")}>
      //     <Text>Chats</Text>
      //   </Pressable>
      // </View>
    );
  }
