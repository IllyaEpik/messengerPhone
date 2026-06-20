import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../styles/footer";
import { ICONS } from "@/shared/static/icons";
import { useEffect, useState } from "react";
import { AlbumModal } from "./albumModal";
import { useGetAlbumsQuery, useUpdateAlbumsMutation } from "../api/albumApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { AlbumOptions } from "./albumOptions";
import { Portal } from "react-native-paper";
import { Album } from "../api/api.types";
interface IFooterProps {
	albums: Album[] | undefined
}
export function Footer(props: IFooterProps) {
	const [isOpen, setIsOpen] = useState(false);
	const { token, user } = useAuthContext();
	// const { data } = useGetAlbumsQuery(token, {
	// 	skip: !token,
	// 	pollingInterval: 5000,
	// });
	const data = props.albums
	const [updateAlbum, { isLoading }] = useUpdateAlbumsMutation();
	function submit(id: number, url: string) {
		if (!id || !token) return;
		try {
			updateAlbum({
				image: url,
				id: id,
				token: token,
			});
		} catch (error) {
			console.error("Update album failed", error);
		}
	}
	if (!user) return null;
	return (
		<>
			{!data || data.length === 1 ? (
				<View style={styles.card}>
					<View style={styles.header}>
						<Text style={styles.noOne}>
							Немає ще жодного альбому
						</Text>
						<Pressable
							style={styles.publicButton}
							onPress={() => setIsOpen(!isOpen)}
						>
							<ICONS.PlusIcon />
						</Pressable>
					</View>
				</View>
			) : (
				data.map((album,index) => {
					if (index===0) return null
					return (
					<View key={album.id} style={styles.card}>
						<View style={styles.header}>
							<Text>{album.name}</Text>
							<View style={styles.albumData}>
								<View style={styles.buttonIcon}>
									<ICONS.openIcon color={"#070A1C"} />
								</View>
								<AlbumOptions album={album} token={token} />
							</View>
						</View>
						<View style={styles.albumData}>
							<Text>{album.theme}</Text>
							<Text style={styles.grayText}>
								{album.year} рік
							</Text>
						</View>
						<View style={styles.divider} />
						<Text style={styles.subtitle}>Фотографіїї</Text>
						<View style={styles.imageContainer}>
							{album.albumImage.map((image) => {
								// `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${img.image}.jpg`
								// const avatarUrl = image.image
								// 	? `http://10.0.2.2:8000/media/Avatars/${image.image.split("/").at(-1)}`
								// 	: `http://10.0.2.2:8000/media/crackedAvatars/${image.image.split("/").at(-1)}`;
								const avatarUrl = `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${image.image}.jpg` 
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
											<TouchableOpacity style={styles.buttonIcon}>
												<ICONS.openIcon
													color={"#070A1C"}
												/>
											</TouchableOpacity>
											<TouchableOpacity style={styles.buttonIcon}>
												<ICONS.TrashIcon
													color={"#070A1C"}
												/>
											</TouchableOpacity>
										</View>
									</View>
								);
							})}
							<ImageInput
								onChange={(url) => submit(album.id, url)}
							>
								<View style={styles.icon}>
									<ICONS.PlusIcon style={styles.buttonIcon} />
								</View>
							</ImageInput>
						</View>
					</View>
				)})
			)}
			<Portal>
			<AlbumModal
				isOpen={isOpen}
				isEdit={false}
				close={() => setIsOpen(false)}
			/></Portal>
		</>
	);
}
