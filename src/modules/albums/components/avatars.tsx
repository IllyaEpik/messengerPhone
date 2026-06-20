import { Text, View, Image } from "react-native";
import { styles } from "../styles/avatars";
import { ICONS } from "@/shared/static/icons";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useState } from "react";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useUpdateProfileMutation } from "@/modules/profile/api/profileApi";
import { Album } from "../api/api.types";
import { useUpdateAlbumsMutation } from "../api/albumApi";
interface IAvatarsProps {
	albums: Album[] | undefined
}
export function Avatars(props: IAvatarsProps) {
	// const [edit, setEdit] = useState<boolean>(false);
	const rawUser = useAuthContext();
	// const [url, setUrl] = useState<string>("")
	if (!rawUser || !rawUser.user) return <Text>"no user"</Text>;
	const user = rawUser.user;
	const [updateAvatars, { isLoading, isError }] = useUpdateAlbumsMutation();
	const avatarItems = props.albums?.at(0)?.albumImage
	const submit = async (url: string) => {
		try {
			await updateAvatars({
				token: rawUser.token,
				image: url,
				id:1
			});
		} catch (error) {
			console.error("Update profile failed", error);
		}
	};
	if (!avatarItems || avatarItems.length<1) return null;
	return (
		<View style={styles.card}>
			<View style={styles.header}>
				<Text style={styles.photo}>Мої фото</Text>
				<ImageInput
					icon={<ICONS.PublicIcon />}
					text="Додати фото"
					onChange={submit}
					filled
					style={styles.publicButton}
				/>
			</View>

			<View style={styles.avatars}>
				{
					// `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${img.image}.jpg`
					avatarItems.map((avatar) => {
					    // const avatarUrl = avatar.avatar
					    // ? `http://10.0.2.2:8000/media/Avatars/${avatar.avatar.split("/").at(-1)}`
					    // : `http://10.0.2.2:8000/media/crackedAvatars/${avatar.crackedAvatar.split("/").at(-1)}`
						const avatarUrl = `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${avatar.image}.jpg`
					    return (
					        <View style={styles.iconContainer} key={avatar.image}>
					            <Image
					                style={styles.icon}
					                source={
					                    avatarUrl
					                    ? { uri: avatarUrl }
					                    : require("../../../media/icon/user.png")
					                }
					                resizeMode="contain"
					            />
					            <View style={styles.iconsOnImg}>
					                <View style={styles.buttonIcon}>
					                    <ICONS.openIcon color={"#070A1C"}/>
					                </View>
					                <View style={styles.buttonIcon}>
					                    <ICONS.TrashIcon color={"#070A1C"}/>
					                </View>
					            </View>
					        </View>
					    )
					})
				}
			</View>
		</View>
	);
}
