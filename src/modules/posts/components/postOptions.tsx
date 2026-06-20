import React, { useState } from "react";
import { Menu, Divider, Portal } from "react-native-paper";
import { Pressable } from "react-native";
import { ICONS } from "@/shared/static/icons";
import { IPost } from "../api/api.types";
import { CreatePostModal } from "./CreatePostModal";
import { styles } from "../styles/postsOptions";
import { useDeletePostMutation } from "../api/postApi";
interface IProps {
	post: IPost;
	token: string;
	remove: () => void;
}

export function PostOptions(props: IProps) {
	const { post, token, remove } = props;
	const [visible, setVisibility] = useState<boolean>(false);
	const [editing, setEditing] = useState<boolean>(false);
	const [deletePost] = useDeletePostMutation();
	function deletePostOption() {
		deletePost({
			token,
			id: post.id,
		});
		remove();
	}
	return (
		<>
			<Menu
				visible={visible && !editing}
				onDismiss={() => setVisibility(false)}
				anchor={
					<Pressable onPress={() => setVisibility(true)}>
						<ICONS.OptionsIcon />
					</Pressable>
				}
				contentStyle={styles.menuCard}
			>
				<Menu.Item
					leadingIcon={ICONS.OptionsIcon}
					onPress={() => setVisibility(false)}
					title=""
					containerStyle={styles.copy}
				/>
				<Menu.Item
					leadingIcon={ICONS.Edit}
					onPress={() => setEditing(true)}
					title="Редагувати допис"
					titleStyle={styles.menuText}
				/>
				<Divider />
				<Menu.Item
					leadingIcon={ICONS.TrashIcon}
					onPress={deletePostOption}
					title="Видалити публікацію"
					titleStyle={styles.menuText}
				/>
			</Menu>
			<Portal>
				<CreatePostModal
					visible={editing}
					onClose={() => setEditing(false)}
					post={post}
				/>
			</Portal>
		</>
	);
}
