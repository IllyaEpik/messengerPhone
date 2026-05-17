import ContactsScreen from "@/modules/chat/components/chatCont";
import { View } from "react-native";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <ContactsScreen />
    </View>
  );
}