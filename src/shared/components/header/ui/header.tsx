import { View, Text } from "react-native";
import { ICONS } from "../../../static/icons";
import { IconButton } from "../../IconButton/IconButton";
import { router, usePathname } from "expo-router";
import { useAuthContext } from "@/modules/auth/context/authContext";

export default function Header() {
  const path = usePathname()
  const {logout} = useAuthContext()
  // function logout() {
    
  // }
  return (
    <View
      style={{
        height: 60,
        // borderBottomWidth: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "white"
      }}
    >
      <ICONS.WorldIT></ICONS.WorldIT>
      <View style={{
        height: 60,
        // borderBottomWidth: 1,
        justifyContent: "flex-end",
        // paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: 'row',
        gap:5
      }}
      >
          <IconButton onPress={() => router.push("/chats")}><ICONS.PlusIcon/></IconButton>
          <IconButton onPress={() => router.push("/profile")} variant={path === "/profile" ? "filled" : undefined}>
            <ICONS.SettingsIcon/>
          </IconButton>
          <IconButton onPress={() => {logout();router.push("/(auth)")}}><ICONS.LogoutIcon/></IconButton>
      </View>
    </View>
  );
}
