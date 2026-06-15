import { RegButton } from "@/shared/components/RegButton/RegBut";
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { styles } from "../styles/friendPage";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Avatar } from "@/shared/components/avatar/avatar";
import { useAuthContext } from "@/modules/auth/context/authContext";
import {
	useConfirmRequestMutation,
	useGetFriendQuery,
	useSendRequestMutation,
} from "../api/friendsApi";
import type { friendInfoOutput } from "../api/api.types";
import { AlbumCard } from "./friendsAlbums";
import { FriendModal } from "./modal";
import { friendMenuVariant } from "../types/friendMenu";
import type { IProfile } from "@/shared/types/user";
import { useFriends } from "../context/storage";
import { useGetPostsQuery } from "@/modules/posts/api/postApi";

export function FriendPage() {
	const { id, action } = useLocalSearchParams<{
		id: string;
		action: friendMenuVariant;
	}>();
	const [visible, setVisible] = useState(false);
	const [confirm] = useConfirmRequestMutation();
	const [sendRequest] = useSendRequestMutation();
	const { token } = useAuthContext();
	const { moveUser } = useFriends();
	const { data } = useGetFriendQuery(
		{ userid: Number(id), token },
		{ skip: !token, pollingInterval: 5000 },
	);
	const friend = data as friendInfoOutput | undefined;
	const friendData: IProfile = friend
		? {
				id: Number(id),
				pseudonym: friend.pseudonym,
				userId: Number(id),
				firstName: null,
				lastName: null,
				avatar: friend.avatar,
				showNickname: false,
				showElectronicSignature: false,
				signature: null,
				user: { username: friend.username },
			}
		: {
				id: Number(id),
				pseudonym: "",
				userId: Number(id),
				firstName: null,
				lastName: null,
				avatar: "",
				showNickname: false,
				showElectronicSignature: false,
				signature: null,
				user: { username: "" },
			};
	// if (!friend) return null
	async function handleConfirm() {
		setVisible(false);
		if (action === "requests") {
			moveUser(friendData, "requests", "all");
			await confirm({ token, fromUserId: Number(id) });
		} else if (action === "recommend") {
			moveUser(friendData, "recommend", "main");
			await sendRequest({ token, profileId: Number(id) });
		}
		router.back();
	}

	const handleDelete = () => {
		console.log("Deleted");
	};

	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<ScrollView>
				<FriendModal
					isOpen={visible}
					userId={Number(id)}
					setIsOpen={setVisible}
					variant={action}
				/>

				<View style={styles.container}>
					{/* Header / Back Button */}
					<View style={styles.header}>
						<Pressable
							onPress={handleBack}
							style={styles.backButton}
						>
							{/* Simple Vector Back Arrow Chevron */}
							<View style={styles.chevronLeft} />
						</Pressable>
					</View>

					{/* Profile Image & Name Section */}
					<View style={styles.profileSection}>
						{/* <View style={styles.avatarContainer}> */}
							<Avatar image="avatar.png" id={Number(id)}/>
							{/* <View style={styles.statusBadge} /> */}
						{/* </View> */}

						<Text style={styles.nameText}>{friend?.pseudonym}</Text>
						<Text style={styles.handleText}>
							@{friend?.username}
						</Text>
					</View>

					{/* Stats Section */}
					<View style={styles.statsContainer}>
						<View style={styles.statBox}>
							<Text style={styles.statNumber}>
								{friend?.posts}
							</Text>
							<Text style={styles.statLabel}>Дописи</Text>
						</View>

						<View style={styles.divider} />

						<View style={styles.statBox}>
							<Text style={styles.statNumber}>
								{friend?.readers}
							</Text>
							<Text style={styles.statLabel}>Читачі</Text>
						</View>

						<View style={styles.divider} />

						<View style={styles.statBox}>
							<Text style={styles.statNumber}>
								{friend?.frieds}
							</Text>
							<Text style={styles.statLabel}>Друзі</Text>
						</View>
					</View>

					{/* Action Buttons */}
					<View style={styles.buttonContainer}>
						<RegButton
							title="Підтвердити"
							onPress={handleConfirm}
							Buttonstyle={styles.actionButton}
						/>
						<RegButton
							title="Видалити"
							onPress={handleDelete}
							invisible={true}
							Buttonstyle={[
								styles.actionButton,
								styles.deleteButtonOutline,
							]}
						/>
					</View>
				</View>
				<AlbumCard />
				<Text style={styles.deactiveText}>постів поки що немає</Text>
			</ScrollView>
		</>
	);
}
