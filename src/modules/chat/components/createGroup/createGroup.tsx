import { Avatar } from "@/shared/components/avatar/avatar";
import { Input } from "@/shared/components/Input/Input";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { ICONS } from "@/shared/static/icons";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
	StatusBar,
	Modal,
} from "react-native";
import {
	useCreateChatMutation,
	useUpdateChatMutation,
} from "../../api/chatApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IChatContactDetailed } from "../../api/api.types";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { GroupAvatar } from "../groupAvatar";
import { router } from "expo-router";

interface Participant {
	id: number;
	name: string;
	avatar?: string;
}

interface CreateGroupDetailsProps {
	visible: boolean;
	initialParticipants?: Participant[];
	onBack: () => void;
	onClose: () => void;
	isEdit?: boolean;
	chat?: IChatContactDetailed;
}

export function CreateGroupDetails({
	visible,
	initialParticipants,
	onBack,
	onClose,
	isEdit,
	chat,
}: CreateGroupDetailsProps) {
	console.log(chat, "321123132132")
	const [image, setImage] = useState<string>(" ");
	const [groupName, setGroupName] = useState(chat?.chatName || "");
	const [participants, setParticipants] = useState<Participant[]>(
		initialParticipants || [],
	);
	const { token, user } = useAuthContext();
	const [createChat] = useCreateChatMutation();
	const [updateChat] = useUpdateChatMutation();
	// Быстрое удаление участника из списка на клиенте
	const handleRemoveParticipant = (id: number) => {
		setParticipants((prev) => prev.filter((p) => p.id !== id));
	};

	if (!visible && !user?.id) return null;
	async function onCreate(groupName: string, participantIds: number[]) {
		if (isEdit) {
			if (!chat?.id) return "something went wrong";
			const updatedChat = await updateChat({
				token,
				users: participantIds.concat([user?.id!]),
				name: groupName,
				Isgroup: true,
				id: chat?.id,
				...(image === " " ? {} : { avatar: image }),
			});
		} else {
			const createdChat = await createChat({
				token,
				users: participantIds.concat([user?.id!]),
				name: groupName,
				Isgroup: true,
				...(image === " " ? {} : { avatar: image }),
			});
			if (!createdChat.data?.id) return null;
			router.push({
				pathname: "/chat/[id]/chat",
				params: { id: createdChat.data.id, tabId: "groups" },
			});
		}
		onClose();
		onBack();
	}
	return (
		<Modal
			style={styles.layoutContainer}
			visible={visible}
			animationType="slide"
			transparent
			onRequestClose={onClose}
		>
			<View style={styles.layoutContainer}>
				<View style={styles.backgroundOverlay} />
				<View style={styles.mainContainer}>
					<StatusBar barStyle="dark-content" />

					{/* Кнопка закрытия крестик */}
					<TouchableOpacity
						style={styles.topCloseAction}
						onPress={onClose}
					>
						<ICONS.ExitIcon />
					</TouchableOpacity>

					<Text style={styles.mainTitle}>
						{isEdit ? "Редагування групи" : "Нова група"}
					</Text>

					{/* Поле ввода названия группы */}
					<View style={styles.inputWrapper}>
						<Input
							label="Назва"
							placeholder="Введіть назву"
							value={groupName}
							onChangeText={setGroupName}
							error=""
							containerInputStyles={styles.input}
						/>
					</View>

					{/* Блок управления аватаркой группы */}
					<View style={styles.avatarSection}>
						{/* Заглушка аватарки группы "NG" */}
						{/* <View style={styles.groupAvatarPlaceholder}>
          <Text style={styles.groupAvatarText}>NG</Text>
        </View> */}
						{/* <Avatar style={styles.groupAvatarPlaceholder} image={image} local/> */}
						<GroupAvatar
							name={groupName}
							avatar={image !== " " ? image : undefined}
							style={styles.groupAvatarPlaceholder}
							local
						/>
						{/* Avatar/> */}

						<View style={styles.avatarActionsRow}>
							{/* <TouchableOpacity style={styles.avatarActionButton} activeOpacity={0.7}>
            <ICONS.PlusIcon/>
            <Text style={styles.avatarActionText}>Додайте фото</Text>
          </TouchableOpacity> */}
							<ImageInput
								onChange={setImage}
								icon={<ICONS.PlusIcon />}
								text="Додайте фото"
								textStyle={styles.avatarActionText}
							/>
							<ImageInput
								onChange={setImage}
								icon={<ICONS.PublicIcon />}
								text="Оберіть фото"
								textStyle={styles.avatarActionText}
							/>
							{/* <TouchableOpacity style={styles.avatarActionButton} activeOpacity={0.7}>
            <ICONS.PublicIcon/>
            <Text style={styles.avatarActionText}>Оберіть фото</Text> 
          </TouchableOpacity> */}
						</View>
					</View>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Учасники</Text>
						<TouchableOpacity
							style={styles.sectionAddPeople}
							onPress={onBack}
						>
							{isEdit ? (
								<>
									<ICONS.PlusIcon color={"#543C52"} />
									<Text style={styles.addPeoplePlus}>
										Додайте учасника
									</Text>
								</>
							) : null}
						</TouchableOpacity>
					</View>

					{/* Список выбранных участников */}
					<FlatList
						data={participants}
						keyExtractor={(item) => String(item.id)}
						renderItem={({ item }) => (
							<View style={styles.participantRowItem}>
								<Avatar
									image={item.avatar}
									style={styles.avatar}
									id={item.id}
								/>
								<Text style={styles.participantLabel}>
									{item.name}
								</Text>

								{/* Кнопка корзины / удаления */}
								<TouchableOpacity
									onPress={() =>
										handleRemoveParticipant(item.id)
									}
									style={styles.deleteButton}
									activeOpacity={0.6}
								>
									<ICONS.TrashIcon />
									{/* Если иконка называется иначе (например, Trash), поправь импорт */}
								</TouchableOpacity>
							</View>
						)}
						contentContainerStyle={styles.scrollContainer}
					/>

					{/* Нижняя панель действий */}
					<View style={styles.footerActionsContainer}>
						<RegButton
							title="Назад"
							invisible={true}
							Buttonstyle={styles.cancelButton}
							onPress={onBack}
						/>
						<RegButton
							title={isEdit ? "Зберегти зміни" : "Створити групу"}
							invisible={false}
							Buttonstyle={styles.button}
							disabled={!groupName}
							onPress={() =>
								onCreate(
									groupName,
									participants.map((p) => p.id),
								)
							}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	sectionHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 24,
		marginBottom: 12,
	},
	sectionAddPeople: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	addPeoplePlus: {
		color: "#543C52",
		fontFamily: "GTMedium",
		fontSize: 16,
	},
	layoutContainer: {
		flex: 1,
		// alignItems: 'center',
		justifyContent: "center",
		position: "relative",
	},
	backgroundOverlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	mainContainer: {
		backgroundColor: "#FFF",
		marginHorizontal: 20,
		borderRadius: 12,
		flex: 1,
		zIndex: 2,
		maxHeight: "90%",
		position: "relative",
	},
	topCloseAction: {
		alignSelf: "flex-end",
		paddingHorizontal: 24,
		paddingTop: 16,
	},
	mainTitle: {
		fontSize: 34,
		fontFamily: "GTMedium",
		textAlign: "center",
		color: "#070A1C",
		marginVertical: 16,
	},
	inputWrapper: {
		paddingHorizontal: 24,
		marginBottom: 20,
	},
	avatarSection: {
		alignItems: "center",
		marginBottom: 24,
	},
	groupAvatarPlaceholder: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#4E374E",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
		marginTop: 40,
	},
	groupAvatarText: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "600",
	},
	avatarActionsRow: {
		flexDirection: "row",
		gap: 20,
	},
	avatarActionButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	avatarActionText: {
		fontSize: 14,
		fontFamily: "GTMedium",
		color: "#4E374E",
	},
	sectionTitle: {
		fontSize: 16,
		fontFamily: "GtMedium",
		color: "#000",
	},
	scrollContainer: {
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	participantRowItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F2",
	},
	participantLabel: {
		flex: 1,
		fontSize: 16,
		fontFamily: "GTMedium",
		color: "#050E1E",
		marginLeft: 16,
	},
	deleteButton: {
		padding: 6,
	},
	footerActionsContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingHorizontal: 24,
		paddingVertical: 20,
		// backgroundColor: '#FFF',
		gap: 16,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 90,
	},
	button: {
		paddingHorizontal: 26,
		paddingVertical: 10,
		// borderRadius: 8,
	},
	cancelButton: {
		borderColor: "#543C52",
		borderWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	input: {
		margin: 0,
		marginBottom: 190,
	},
});
