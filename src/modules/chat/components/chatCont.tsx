import React, { useEffect, useMemo, useState } from "react";
import {
	View,
	Text,
	TextInput,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { styles } from "../styles/chatCont.styles";
import { useGetChatMutation, useGetChatsQuery } from "../api/chatApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useGetFriendsDataQuery } from "@/modules/friends/api/friendsApi";
import { Avatar } from "@/shared/components/avatar/avatar";
// import { router } from "expo-router/build/exports";
import { router, useLocalSearchParams } from "expo-router";
import { ICONS } from "@/shared/static/icons";
import { GroupAvatar } from "./groupAvatar";
import { Input } from "@/shared/components/Input/Input";
import { useContactsContext } from "../context/contactsContext";
import { IChat, IMessage, socketMessage } from "../api/api.types";
import { socket } from "@/shared/api/socket/socket";
import { IconNotification } from "@/shared/components/iconNotification/notification";

const tabs = [
	{ id: "contacts", label: "Контакти" },
	{ id: "messages", label: "Повідомлення" },
	{ id: "groups", label: "Групові чати" },
];

export function ContactsScreen() {
	const { tabId } = useLocalSearchParams<{ tabId?: string }>();
	const [activeTab, setActiveTab] = useState(tabId || "contacts");
	const [search, setSearch] = useState("");
	const { user, token } = useAuthContext();
	const [getChat] = useGetChatMutation();
	const {
		contacts,
		chats: chatsFromApi,
		isLoadingChats: isLoading,
	} = useContactsContext();
	const [chats, setChats] = useState<IChat[]>(
		chatsFromApi ? chatsFromApi : [],
	);
	// const friends = useGetFriendsDataQuery({  token: token, pagination: { recommends: 0, requests: 0 } }, { skip: !user?.id || !token });
	useEffect(() => {
		if (chatsFromApi) setChats(chatsFromApi);
	}, [isLoading]);
	useEffect(() => {
		socket.auth = { token: `Bearer ${token}` };
		socket.connect();
		socket.on("updateChat", (message: socketMessage) => {
			setChats((prevChats) =>
				prevChats?.map((chat) =>
					chat.id === message.message.chatId
						? {
								...chat,
								unreadMessages: chat.unreadMessages + 1,
								message: message.message.text,
							}
						: chat,
				),
			);
		});
		return () => {
			socket.off("updateChat");
		};
	}, []);
	const activeTabLabel = useMemo(
		() => tabs.find((tab) => tab.id === activeTab)?.label ?? "Контакти",
		[activeTab],
	);
	async function openChatContact(friendId: number) {
		const chat = await getChat({ friendId, token: token! }).unwrap();
		router.push({ pathname: "/chat/[id]/chat", params: { id: chat.id } });
	}
	function openChat(chatId: number) {
		const count = chats?.find((chat) => chat.id === chatId)?.unreadMessages;
		if (typeof count !== "number") return "";
		setChats((prevChats) =>
			prevChats?.map((chat) =>
				chat.id === chatId ? { ...chat, unreadMessages: 0 } : chat,
			),
		);
		router.push({
			pathname: "/chat/[id]/chat",
			params: { id: chatId, tabId: activeTab },
		});
	}
	const filteredChats = useMemo(() => {
		if (!search) return chats;

		return chats.filter((chat) =>
			chat.chatName.toLowerCase().includes(search.toLowerCase()),
		);
	}, [search, chats]);
	const groupUnreadMessages = chats
		.map((chat) => chat.unreadMessages * (chat.isGroup ? 1 : 0))
		.reduce((chat, prev) => chat + prev, 0);
	const localUnreadMessages = chats
		.map((chat) => chat.unreadMessages * (!chat.isGroup ? 1 : 0))
		.reduce((chat, prev) => chat + prev, 0);
	return (
		<>
			<View style={styles.tabs}>
				{tabs.map((tab) => (
					<TouchableOpacity
						key={tab.id}
						style={[
							styles.tab,
							activeTab === tab.id && styles.activeTab,
						]}
						onPress={() => setActiveTab(tab.id)}
					>
						{tab.id === "contacts" ? (
							<ICONS.PeopleIcon />
						) : (
							<IconNotification
								count={
									tab.id === "groups"
										? groupUnreadMessages
										: localUnreadMessages
								}
							>
								<ICONS.ChatIcon />
							</IconNotification>
						)}
						<Text style={styles.tabText}>{tab.label}</Text>
					</TouchableOpacity>
				))}
			</View>
			<View style={styles.container}>
				<View style={styles.titleBlock}>
					{activeTab === "contacts" ? (
						<ICONS.PeopleIcon color={"#81818D"} />
					) : (
						<IconNotification
							count={
								activeTab === "groups"
									? groupUnreadMessages
									: localUnreadMessages
							}
						>
							<ICONS.ChatIcon color={"#81818D"} />
						</IconNotification>
					)}
					<Text style={styles.title}>{activeTabLabel}</Text>
				</View>

				{/* <TextInput placeholder="Пошук" placeholderTextColor="#999" style={styles.searchInput} /> */}
				<View style={styles.searchInputContainer}>
					<Input
						placeholder="Пошук"
						value={search}
						onChangeText={setSearch}
						label=""
						leftIcon={<ICONS.SearchIcon />}
						containerInputStyles={styles.searchInput}
					/>
				</View>
				{activeTab === "contacts" &&
					(contacts ? (
						<FlatList
							data={contacts.filter((contact) =>
								contact.pseudonym
									.toLowerCase()
									.includes(search.toLowerCase()),
							)}
							keyExtractor={(item) => item.id.toString()}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.list}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.contactItem}
									onPress={() => openChatContact(item.userId)}
								>
									{/* image={item.avatar} */}
									<Avatar
										style={styles.avatar}
										id={item.userId}
									/>
									<Text style={styles.contactName}>
										{item.pseudonym || "unknown"}
									</Text>
								</TouchableOpacity>
							)}
						/>
					) : (
						<View style={styles.placeholderBox}>
							<Text style={styles.placeholderText}>
								У тебе поки що немає контактів.
							</Text>
						</View>
					))}

				{activeTab === "messages" &&
					(filteredChats &&
					filteredChats.filter((chat) => !chat.isGroup).length > 0 ? (
						<FlatList
							data={filteredChats.filter((chat) => !chat.isGroup)}
							keyExtractor={(item) => item.id.toString()}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.list}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.groupItem}
									onPress={() => openChat(item.id)}
								>
									<Avatar
										style={styles.avatar}
										id={
											item.users.find(
												({ id }) => user?.id !== id,
											)?.id!
										}
									/>
									<View style={styles.groupInfo}>
										<View style={styles.groupHeader}>
											<Text style={styles.contactName}>
												{item.chatName}
											</Text>
											<View
												style={styles.descriptionBlock}
											>
												<Text style={styles.groupTime}>
													{typeof item.time ===
													"string"
														? item.time
														: "00:00"}
												</Text>
												{item.unreadMessages > 0 ? (
													<Text
														style={
															styles.notification
														}
													>
														{item.unreadMessages}
													</Text>
												) : null}
											</View>
										</View>
										<Text style={styles.groupMessage}>
											{item.message}
										</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					) : (
						<View style={styles.placeholderBox}>
							<Text style={styles.placeholderText}>
								У тебе поки що немає повідомлень.
							</Text>
						</View>
					))}

				{activeTab === "groups" &&
					(filteredChats &&
					filteredChats.filter((chat) => chat.isGroup).length > 0 ? (
						<FlatList
							data={filteredChats.filter((chat) => chat.isGroup)}
							keyExtractor={(item) => item.id.toString()}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.list}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.groupItem}
									onPress={() => openChat(item.id)}
								>
									<GroupAvatar
										name={item.chatName}
										avatar={item.avatar}
									/>
									<View style={styles.groupInfo}>
										<View style={styles.groupHeader}>
											<View>
												<Text
													style={styles.contactName}
												>
													{item.chatName}
												</Text>
												<Text
													style={styles.groupMessage}
												>
													{item.message}
												</Text>
											</View>
											<View
												style={styles.descriptionBlock}
											>
												<Text style={styles.groupTime}>
													{typeof item.time ===
													"string"
														? item.time
														: "00:00"}
												</Text>

												{item.unreadMessages > 0 ? (
													<Text
														style={
															styles.notification
														}
													>
														{item.unreadMessages}
													</Text>
												) : null}
											</View>
										</View>
									</View>
								</TouchableOpacity>
							)}
						/>
					) : (
						<View style={styles.placeholderBox}>
							<Text style={styles.placeholderText}>
								У тебе поки що немає груп.
							</Text>
						</View>
					))}
			</View>
		</>
	);
}
