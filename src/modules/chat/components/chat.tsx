import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Image,
	Platform,
} from "react-native";
import {
	KeyboardProvider,
	KeyboardAvoidingView,
} from "react-native-keyboard-controller";
import { Avatar } from "@/shared/components/avatar/avatar";
// adjust path to your icons
import { styles } from "../styles/chat.styles"; // reuse your existing styles
import { ICONS } from "@/shared/static/icons";
import { router, useLocalSearchParams } from "expo-router/build/exports";
import {
	ICreateImageMessagePayload,
	ICreateMessagePayload,
	IMessage,
} from "../api/api.types";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Message } from "./message";
import {
	useGetCurrentChatQuery,
	useGetMessagesQuery,
	useSendMessageMutation,
} from "../api/chatApi";
import { socket } from "@/shared/api/socket/socket";
import { ChatOptions } from "./chatOptions";
import { GroupAvatar } from "./groupAvatar";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";

const tabs = [
	{ id: "contacts", label: "Контакти" },
	{ id: "messages", label: "Повідомлення" },
	{ id: "groups", label: "Групові чати" },
];

export function ChatScreen() {
	const { id, tabId } = useLocalSearchParams<{
		id: string;
		tabId?: string;
	}>();
	const [images, setImages] = useState<string[]>([]);
	const activeTab = tabId || "contacts";
	const chatId = Number(id);
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [sendImageMessage] = useSendMessageMutation();
	const { token, user } = useAuthContext();
	const chat = useGetCurrentChatQuery(
		{
			chatId,
			token,
			userId: user?.id!,
		},
		{ skip: !chatId || !token || !user?.id },
	);
	const friendId = chat.data?.users.find(friend => friend.id !==user?.id)
	const { data } = useGetMessagesQuery(
		{ chatId: chatId, token: token },
		{ skip: !token || !chatId },
	);
	const [inputText, setInputText] = useState(""); 
	useEffect(() => {
		if (data) {
			setMessages(data);
		}
	}, [data]);
	useEffect(() => {
		socket.auth = { token: `Bearer ${token}` };
		socket.connect();
		socket.emit("chatConnect", { chatId }, (something) => {
		});
		socket.on("newMessage", (message: IMessage) => {
			console.log("New message received:", message);
			setMessages((prev) => [message, ...prev]);
			socket.emit("readMessage", {messageId: message.id})
		});
		return () => {
			socket.emit("leaveChat", { chatId });
			socket.off("newMessage");
			socket.disconnect();
		};
	}, []);
	// Placeholder handlers – replace with your actual send / attach logic
	async function handleSend() {
		if (!inputText.trim()) return;

		if (images) {
			const newMessage: ICreateImageMessagePayload = {
				text: inputText,
				chatId: chatId,
				images: images,
				token: token,
			};
			const message = await sendImageMessage(newMessage).unwrap();

			// setMessages((prev) => [message, ...prev]);
			setImages([]);
		} else {
			const newMessage: ICreateMessagePayload = {
				text: inputText,
				chatId: chatId,
			};
			socket.emit("sendMessage", newMessage);
		}
		// setMessages((prev) => [...prev, newMessage]);
		setInputText("");
	}

	function handleAttachImage(image: string) {
		setImages(images.concat(image));
	}
	function handleBack(tabId?: string) {
		router.push({
			// Путь к целевой странице без динамических сегментов
			pathname: "/(tabs)/chat",
			// Параметры, которые вы хотите передать
			params: { tabId: tabId || activeTab },
		});
	}
	return (
		<KeyboardProvider>
			{/* <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }} extraKeyboardSpace={20} bottomOffset={100}> */}
			<View style={styles.tabs}>
				{tabs.map((tab) => (
					<TouchableOpacity
						key={tab.id}
						style={[
							styles.tab,
							activeTab === tab.id && styles.activeTab,
						]}
						onPress={() => handleBack(tab.id)}
					>
						{tab.id === "contacts" ? (
							<ICONS.PeopleIcon />
						) : (
							<ICONS.ChatIcon />
						)}
						<Text style={styles.tabText}>{tab.label}</Text>
					</TouchableOpacity>
				))}
			</View>
			<View style={styles.chatContainer}>
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<TouchableOpacity
							style={styles.iconButton}
							onPress={() => handleBack()}
						>
							<ICONS.BackIcon />
						</TouchableOpacity>
						{chat.data?.isGroup ? (
							<GroupAvatar
								name={chat.data.chatName}
								avatar={chat.data.avatar}
								style={styles.avatar}
							/>
						) : (
							<Avatar
								style={styles.avatar}
								image={chat.data?.avatar}
								id={friendId ? friendId.id : null}
								size={46}
							/>
						)}
						<View style={styles.headerCenter}>
							<Text style={styles.groupName}>
								{chat.data?.chatName}
							</Text>
							<Text style={styles.memberStatus}>офлайн</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.iconButton}>
						{/* <ICONS.OptionsIcon /> */}
						<ChatOptions
							isAdmin={chat.data?.isAdmin}
							id={chatId}
							chat={chat.data!}
							isChat={!chat.data?.isGroup}
						/>
					</TouchableOpacity>
				</View>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					keyboardVerticalOffset={140}
				>
					<FlatList
						data={messages} // Mark messages as own based on senderId
						keyExtractor={(item, i) => i.toString()}
						renderItem={({ item }) => (
							<Message
								message={item}
								isOwn={item.senderId === user?.id}
							/>
						)}
						// contentContainerStyle={styles.chatList}
						inverted={true}
					/>
					{/* Input panel with image attach and send button */}
					<View>
						<ScrollView horizontal>
							{images.map((image) => (
								<Image
									// style={[styles.avatar]}
									style={{
										width: 100,
										height: 100,
										backgroundColor: "blue",
									}}
									source={{ uri: image }}
									resizeMode="contain"
								/>
							))}
						</ScrollView>
						<View style={styles.inputPanel}>
							<TextInput
								style={styles.chatInput}
								placeholder="Повідомлення"
								placeholderTextColor="#81818D"
								value={inputText}
								onChangeText={setInputText}
							/>

							<ImageInput onChange={handleAttachImage}>
								<View style={styles.attachButton}>
									<ICONS.PublicIcon />
								</View>
							</ImageInput>
							<TouchableOpacity
								onPress={handleSend}
								style={[styles.attachButton, styles.sendButton]}
							>
								<ICONS.SendIcon />
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
			{/* </KeyboardAwareScrollView> */}
		</KeyboardProvider>
	);
}
