import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../styles/footer";
import { ICONS } from "@/shared/static/icons";
import { useEffect, useState } from "react";
import { AlbumModal } from "./albumModal";
import { useGetAlbumsQuery, useUpdateAlbumsMutation } from "../api/albumApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { AlbumOptions } from "./albumOptions";

export function Footer(){
	const [isOpen, setIsOpen] = useState(false)
	const {token, user} = useAuthContext();
	const {data} = useGetAlbumsQuery(token, { skip: !token, pollingInterval: 5000 })
	const [updateAlbum, {isLoading}] = useUpdateAlbumsMutation()
	// const [url, setUrl] = useState<string>("")
	// const [currentId, setId] = useState<number | null>()
	function submit(id:number,url:string) {
		if (!id || !token) return
		try {
			updateAlbum({
				image:url,
				id:id,
				token:token
			})
        } catch (error) {
        	console.error("Update album failed", error);
        }
	}
	if (!user) return null
	return (
		<>
			{!data || data.length === 0? <View style= {styles.card}>
				<View style={styles.header}>
					<Text style = {styles.noOne}>Немає ще жодного альбому</Text>
					<Pressable style={styles.publicButton} onPress={() => setIsOpen(!isOpen)}>
						<ICONS.PlusIcon/>
					</Pressable>
				</View>
			</View> : (data.map((album) => (
					<View key={album.id} style={styles.card}>
						<View style={styles.header}>
							<Text>{album.title}</Text>
							<View style={styles.albumData}>
								<View style={styles.buttonIcon}>
									<ICONS.openIcon color={"#070A1C"}/>
								</View> 
								<AlbumOptions album={album} token={token}/>
							</View>
						</View>
						<View style={styles.albumData}>
							<Text>{album.topic.name}</Text>
							<Text style={styles.grayText}>{album.year} рік</Text>
						</View>
						<View style={styles.divider} />
						<Text style={styles.subtitle}>Фотографіїї</Text>
						<View style={styles.imageContainer}>
							{
								 album.photos.map((photo) => {
									const avatarUrl = photo.photo
									? `http://10.0.2.2:8000/media/Avatars/${photo.photo.split("/").at(-1)}`
									: `http://10.0.2.2:8000/media/crackedAvatars/${photo.crackedPhoto.split("/").at(-1)}`
									return (
										<View style={styles.iconContainer}>
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
							<ImageInput onChange={(url) => submit(album.id,url)}>
								<View style={styles.icon}>
									<ICONS.PlusIcon style={styles.buttonIcon}/>
								</View>
							</ImageInput>
						</View>
					</View>
				)))
			}
			<AlbumModal isOpen={isOpen} isEdit={false} close={()=>setIsOpen(false)}/>
		</>
	)
};
