import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/chat.styles";
import { IMessage } from "../api/api.types";
import { ICONS } from "@/shared/static/icons/icons";
import { Avatar } from "@/shared/components/avatar/avatar";

type MessageProps = {
	message: IMessage;
	isOwn: boolean;
};

export function Message({ message, isOwn }: MessageProps) {
	const path = `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/`;
	return (
		<View
			style={[
				styles.messageRow,
				isOwn ? styles.myMessageRow : styles.theirMessageRow,
			]}
		>
			{!isOwn && (
				<Avatar
					style={styles.messageAvatar}
					size={36}
					id={message.senderId}
					//   image={message.avatar}
				/>
			)}
			<View
				style={[
					styles.messageBubble,
					isOwn ? styles.myBubble : styles.theirBubble,
				]}
			>
				<View>
					<ScrollView horizontal style={styles.images}>
						{message.images.map((image) => (
							<Image
								// style={[styles.avatar]}
								style={{
									width: 100,
									height: 100,
									backgroundColor: "blue",
									marginRight: 5,
									// flex:1
								}}
								source={{ uri: path + image + ".jpg"}}
								resizeMode="contain"
							/>
						))}
					</ScrollView>
					{!isOwn && (
						<Text style={styles.senderName}>
							{message.senderName}
						</Text>
					)}
					<Text style={styles.messageText}>{message.text}</Text>
				</View>
				<View style={styles.deteils}>
					{/* <Text style={styles.messageTime}>{typeof message.created_at === "string" ? message.created_at || "00:00" : message.created_at?.toLocaleTimeString() || "00:00"}</Text> */}
					<Text style={styles.messageTime}>{message.date}</Text>
					<ICONS.checkmark />
				</View>
			</View>
		</View>
	);
}
