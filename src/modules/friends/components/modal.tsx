import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { IProps } from "../types/friendModal";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { styles } from "../styles/modal";
import { useAuthContext } from "@/modules/auth/context/authContext";
import {
	useBlockRequestMutation,
	useRemoveUserMutation,
} from "../api/friendsApi";
import { useFriends } from "../context/storage";

export function FriendModal(props: IProps) {
	const { isOpen, setIsOpen, userId, variant, friend } = props;
	const [removeFriend] = useRemoveUserMutation();
	const { moveUser } = useFriends();
	const [blockRequest] = useBlockRequestMutation();
	const { token } = useAuthContext();
	const id = friend?.find((frind) => frind.id === userId) ?? { id: userId };
	if (!id) return null;
	async function onConfirm() {
		if (variant === "all") {
			moveUser(id, "all", "recommend");
			await removeFriend({ token, userid: userId });
		}
		if (variant === "requests") {
			moveUser(id, "requests", "all");
			await removeFriend({ token, userid: userId });
		}
		if (props.variant === "recommend") {
			moveUser(id, "recommend", "main");
			await blockRequest({ token, userid: userId });
		}
		setIsOpen(false);
	}
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={isOpen}
			onRequestClose={() => setIsOpen(false)}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>Підтвердити дію</Text>

					<Text style={styles.modalText}>
						Ви дійсно хочете видалити користувача?
					</Text>

					<View style={styles.buttonRow}>
						<RegButton
							title="Скасувати"
							onPress={() => setIsOpen(false)}
							invisible={true}
							Buttonstyle={styles.flexButton}
						/>
						<RegButton
							title="Підтвердити"
							onPress={onConfirm}
							Buttonstyle={styles.flexButton}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}
