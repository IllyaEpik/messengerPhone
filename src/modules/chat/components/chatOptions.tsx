import React, { useState } from "react";
import { Menu, Divider, Portal } from "react-native-paper";
import { Pressable, TouchableOpacity, View } from "react-native";
import { ICONS } from "@/shared/static/icons";
import { styles } from "../styles/chatsOptions";
import { ChatModal } from "./createGroup/selectPeople";
import { router } from "expo-router";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useDeleteChatMutation } from "../api/chatApi";
import { IChat, IChatContactDetailed } from "../api/api.types";
interface IProps {
	isAdmin?: boolean;
	id: number;
	chat: IChatContactDetailed;
	isChat?: boolean;
	tabId?: string;
}

export function ChatOptions(props: IProps) {
	const { isAdmin, id, chat, isChat, tabId } = props;
	const { token } = useAuthContext();
	const [visible, setVisibility] = useState<boolean>(false);
	const [editing, setEditing] = useState<boolean>(false);
	const [deleteChat] = useDeleteChatMutation();
	function deletePostOption() {
		deleteChat({
			token,
			chatId: id,
		});
		setVisibility(false);
		// router.push("chat/");
		router.push({
			// Путь к целевой странице без динамических сегментов
			pathname: "/(tabs)/chat",
			// Параметры, которые вы хотите передать
			params: { tabId: tabId || "contacts" },
		});
	}
	return (
		<>
			<Menu
				visible={visible && !editing}
				onDismiss={() => setVisibility(false)}
				anchor={
					<TouchableOpacity
						onPress={() => setVisibility(true)}
						//style={visible ? { opacity: 0, pointerEvents: 'none' } : null}
					>
						<ICONS.OptionsIcon />
					</TouchableOpacity>
				}
				contentStyle={styles.menuCard}
			>
				<Menu.Item
					leadingIcon={ICONS.OptionsIcon}
					onPress={() => setVisibility(false)}
					title=""
					containerStyle={styles.copy}
				/>
				{isAdmin ? (
					<Menu.Item
						leadingIcon={ICONS.Edit}
						onPress={() => {setEditing(true); setVisibility(false)}}
						title="Редагувати групу"
						titleStyle={styles.menuText}
					/>
				) : null}

				<Divider />
				{isAdmin || isChat ? (
					<Menu.Item
						leadingIcon={ICONS.TrashIcon}
						onPress={deletePostOption}
						title="Видалити чат"
						titleStyle={styles.menuText}
					/>
				) : (
					<Menu.Item
						leadingIcon={ICONS.LogoutIcon}
						onPress={deletePostOption}
						title="Покинути групу"
						titleStyle={styles.menuText}
					/>
				)}
			</Menu>
			{/* <Portal> */}
			{/* <CreatePostModal  visible={editing} onClose={() => setEditing(false)} post={post}/> */}
			<ChatModal
				visible={editing}
				onCancel={() => setEditing(false)}
				isEdit
				chat={chat}
			/>
			{/* </Portal> */}
		</>
	);
}
