import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../styles/profileCard";
import { ICONS } from "@/shared/static/icons";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useUpdateProfileMutation } from "../api/profileApi";

export function ProfileCard(){

	const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
	const [edit, setEdit] = useState<boolean>(false);
    const rawUser= useAuthContext()
	const [username, setUsername] = useState<string>(rawUser.user?.username || "")
	const [url, setUrl] = useState<string>("")
    if (!rawUser || !rawUser.user) return <Text>"no user"</Text>
    const user = rawUser.user
	const avatarItem = user.profile?.avatar.split("/").at(-1);
	const avatarUrl = `http://127.0.0.1:8000/media/${avatarItem}`
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
			<Text style={styles.nickname}>{user.profile?.pseudonym}</Text>
			{!edit ? <Text style={styles.username}>@{user?.username}</Text> :
			<Input
				label = "Ім’я користувача"
				value = {"@" + username}
				placeholder = {user?.username || "@"}
				error=""
				onChangeText = {setUsername}
			/>}
		</View>
	);
};
