import { CreateProfileModal } from "@/modules/auth/components/profileModal";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { View, Text } from "react-native";


export default function Main() {
  const {user} = useAuthContext()
	console.log(user)
    return (
		<>
		{!user?.profile && <CreateProfileModal />}
		<View>
			
			<Text>eerwerw</Text>
			<ChatIcon/>
		</View>
		</>
    )
}