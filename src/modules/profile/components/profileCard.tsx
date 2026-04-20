import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../styles/profileCard";
import { ICONS } from "@/shared/static/icons";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useUpdateProfileMutation } from "../api/profileApi";

export function ProfileCard(){

	const [edit, setEdit] = useState<boolean>(false);
    const rawUser= useAuthContext()
	const [url, setUrl] = useState<string>("")
    if (!rawUser || !rawUser.user) return <Text>"no user"</Text>
    const user = rawUser.user
	const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
	const avatarItem = user.profile?.avatar?.at(-1);
	console.log("avatar", avatarItem?.crackedAvatar.split("/").at(-1))
	const avatarUrl = avatarItem
	? `http://10.0.2.2:8000/media/crackedAvatars/${avatarItem.crackedAvatar.split("/").at(-1)}`
	: undefined;
	const [username, setUsername] = useState<string>(user.profile?.username || "")
	const submit = async () => {
        if (!edit) {
			setEdit(true);
			return;
        }


        try {
			updateProfile({
				token:rawUser.token,
				avatar:url
			})
			setEdit(false);
        } catch (error) {
        	console.error("Update profile failed", error);
        }
    };
	return (
		<View style= {styles.card}>
			<View style={styles.header}>
				<Text style= {styles.cardProf}>Картка профілю</Text>
				
				<Pressable
					style={[styles.editButton, edit && styles.activatedEditButton]}
					onPress={submit}
				>
					<ICONS.Edit />
					{edit && <Text>Зберегти</Text> }
				</Pressable>
			</View>
			
			{edit && <Text>Оберіть або завантажте фото профілю</Text>}
			<Image
				style={styles.icon}
				source={
					avatarUrl
					? { uri: avatarUrl }
					: require("../../../media/icon/user.png")
				}
				resizeMode="contain"
			/>
			{edit && <View style={styles.inputs}>
				<ImageInput icon={<ICONS.PlusIcon/>} text="Додайте фото" onChange={setUrl}/>
				<ImageInput icon={<ICONS.PublicIcon/>} text="Оберіть фото" onChange={setUrl}/>
			</View> }
			<Text style={styles.nickname}>{user.profile?.nickname}</Text>
			{!edit ? <Text style={styles.username}>@{user.profile?.username}</Text> :
			<Input
				label = "Ім’я користувача"
				value = {"@" + username}
				placeholder = {user.profile?.username || "@"}
				error=""
				onChangeText = {setUsername}
			/>}
		</View>
	);
};
