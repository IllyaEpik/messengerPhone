import { CreateProfileModal } from "@/modules/auth/components/profileModal";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { PostList } from "@/modules/posts/components/PostList";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { View, Text, ScrollView } from "react-native";


export default function Main() {
  const {user} = useAuthContext()
	console.log(user)
    return (
		<>
		{!user?.profile && <CreateProfileModal />}
		{/* <ScrollView> */}
		<PostList isMine={false}/>
		{/* </ScrollView> */}
		</>
    )
}