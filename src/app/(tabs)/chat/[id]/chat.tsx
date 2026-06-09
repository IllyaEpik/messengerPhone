import { ChatScreen } from "@/modules/chat/components/chat";
import { View } from "react-native";

export default function ChatApp() {
	return (
		<View style={{ flex: 1 }}>
			<ChatScreen />
		</View>
	);
}
