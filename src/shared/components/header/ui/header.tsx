import { View, Text } from "react-native";
import { ICONS } from "../../../static/icons";
import { IconButton } from "../../IconButton/IconButton";
import { router, useNavigation } from "expo-router";

export default function Header() {
  const navigation = useNavigation()
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
          <IconButton onPress={() => router.push("/settings")}><ICONS.SettingsIcon/></IconButton>
          <IconButton onPress={() => router.push("/(auth)")}><ICONS.LogoutIcon/></IconButton>
      </View>
    </View>
  );
}
