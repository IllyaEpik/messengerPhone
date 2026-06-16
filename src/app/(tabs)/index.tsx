import { CreateProfileModal } from "@/modules/auth/components/profileModal";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { PostList } from "@/modules/posts/components/PostList";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { View, Text, ScrollView } from "react-native";

export default function Main() {
	const { user, isLoading } = useAuthContext();
	return (
		<>
			{(!user?.profile && user) ? <CreateProfileModal /> : null}
			{/* <ScrollView> */}
			<PostList isMine={false} />
			{/* </ScrollView> */}
		</>
	);
}
