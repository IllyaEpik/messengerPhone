import { Text, View, Image } from "react-native";
import { styles } from "../styles/avatars";
import { ICONS } from "@/shared/static/icons";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useState } from "react";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useUpdateProfileMutation } from "@/modules/profile/api/profileApi";

export function Avatars(){
    // const [edit, setEdit] = useState<boolean>(false);
    const rawUser= useAuthContext()
    const [url, setUrl] = useState<string>("")
    if (!rawUser || !rawUser.user) return <Text>"no user"</Text>
    const user = rawUser.user
    if (!user.profile || !user.profile.avatar) return null;
    const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
    const avatarItems = user.profile.avatar;
    const submit = async () => {
        // if (!edit) {
		// 	setEdit(true);
		// 	return;
        // }


        try {
			updateProfile({
				token:rawUser.token,
				avatar:url
			})
			// setEdit(false);
        } catch (error) {
        	console.error("Update profile failed", error);
        }
    };
    return (
        <View style= {styles.card}>
            <View style={styles.header}>
                <Text style= {styles.photo}>Мої фото</Text>
                {/* <View style={styles.publicButton}>
                    <ICONS.PublicIcon/>
                    <Text style= {styles.add}>Додати фото</Text>
                </View> */}
                <ImageInput 
                icon={<ICONS.PublicIcon/>} text="Додати фото" 
                onChange={setUrl} filled style={styles.publicButton}/>
            </View>
            
            <View style={styles.avatars}>
                {
                    avatarItems.map((avatar) => {
                        const avatarUrl = avatar.avatar
                        ? `http://10.0.2.2:8000/media/Avatars/${avatar.avatar.split("/").at(-1)}`
                        : `http://10.0.2.2:8000/media/crackedAvatars/${avatar.crackedAvatar.split("/").at(-1)}`
                        return (
                            <Image
                                            style={styles.icon}
                                            source={
                                                avatarUrl
                                                ? { uri: avatarUrl }
                                                : require("../../../media/icon/user.png")
                                            }
                                            resizeMode="contain"
                                        />

                        )

                    })
                }
            </View>
        </View>
    );
};
