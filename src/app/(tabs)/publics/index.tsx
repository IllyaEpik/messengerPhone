import { PostList } from "@/modules/posts/components/PostList";
import { Menu } from "@/shared/components/menu/ui/menu";
import { View, Text, ScrollView } from "react-native";

export default function Main() {
	return (
		// <ScrollView>
		<PostList isMine />
		// {/* </ScrollView> */}
	);
}
