import React, { useState }from "react";
import { Modal, View, Text, TextInput, Pressable, ScrollView,Image } from "react-native";
import { createPostModalStyles } from "../styles/createPostModal.styles";
import { ICONS } from "@/shared/static/icons";
import { Input } from "../../../shared/components/Input/Input";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useCreatePostMutation } from "../api/postApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
interface CreatePostModalProps {
	visible: boolean;
	onClose: () => void;
}

export function CreatePostModal(props: CreatePostModalProps) {
	const { visible, onClose } = props;
	const [createPost] = useCreatePostMutation()
	const {token} = useAuthContext()
	const [link, setLink] = useState<string>("")
	const [title, setTitle] = useState<string>("")
	const [topic, setTopic] = useState<string>("")
	const [content, setContent] = useState<string>("")
	const [images, setImages] = useState<string[]>([])
	const tagsList = ['відпочинок','натхнення','життя','природа','читання','спокій','гармонія','музика','фільми','подорожі'];
	function addImage(image:string) {
		setImages([...images, image])
	}
	
	async function handleSubmit() {
		await createPost({
			title,
			token,
			content,
			topic,
			images,
			// [link],
		});
		setTitle("");
		setTopic("");
		setContent("");
		setLink("");
		setImages([]);
		onClose();
	}

	return (
		<Modal
		visible={visible}
		animationType="slide"
		transparent
		onRequestClose={onClose}
		>
		<View style={createPostModalStyles.modalOverlay}>
			<View style={createPostModalStyles.modalContainer}>
				<View style={createPostModalStyles.buttonContainer}>
					<Pressable onPress={onClose} style={createPostModalStyles.closeButton}>
						<ICONS.ExitIcon />
					</Pressable>
				</View>
				<Text style={createPostModalStyles.title}>
					Створення публікації
				</Text>
				<ScrollView contentContainerStyle={createPostModalStyles.scrollView}>
					{/* <View style={createPostModalStyles.scrollView}> */}
					
						<View>
							<Input 
								placeholder="Природа, книга і спокій"
								label="Назва публікації"
								error=""
								value={title}
								onChangeText={setTitle}
							/>
						</View>
						<View>
							<Input 
								placeholder="Напишіть тему публікації"
								label="Тема публікації"
								error=""
								value={topic}
								onChangeText={setTopic}
							/>
						</View>
						<View style={createPostModalStyles.tagsContainer}>
							{tagsList.map(tag => (
								<Pressable key={tag} style={createPostModalStyles.tag} onPress={() => {setContent(content + " #" + tag)}}>
									<Text style={createPostModalStyles.tagText}>#{tag}</Text>
								</Pressable>
							))}
							<View style={createPostModalStyles.plusButton}>
								<ICONS.PlusIcon />
							</View>
						</View>
						<Input 
							containerInputStyles={createPostModalStyles.textarea}
							placeholder= "Текст публікації"
							value={content}
							onChangeText={setContent}
							error= ""
							label=""
							multiline
						/>
						<View>
							<Input 
								placeholder= "https://www.instagram.com/"
								value={link}
								onChangeText={setLink}
								error= ""
								label="Посилання"
								icon={
									<View style={createPostModalStyles.plusButton}>
										<ICONS.PlusIcon />
									</View>
								}
							/>
						</View>
						{images.map((image,index) => {
							return <View style={createPostModalStyles.imageContainer} key={index}>
								<Image
									style={createPostModalStyles.image}
									source={{uri: image}}
									resizeMode="contain"
								/>
								<View style={[createPostModalStyles.buttonIcon, createPostModalStyles.trashIcon]}>
									<ICONS.TrashIcon/>
								</View>
							</View>
						})}
					{/* </View> */}
							
					<View style={createPostModalStyles.buttonsContainer}>
						<ImageInput onChange={addImage} notAspect={true}>

							<View style={createPostModalStyles.buttonIcon}>
								<ICONS.PublicIcon />
							</View>
						</ImageInput>
						<View style={createPostModalStyles.buttonIcon}>
							<ICONS.Smile />
						</View>
						<Pressable
							style={createPostModalStyles.submitButton}
							onPress={handleSubmit}
						>
							<Text style={createPostModalStyles.submitButtonText}>Публікація</Text>
							<ICONS.SendIcon/>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</View>
		</Modal>
	);
};
function useAthContext(): { userToken: any; } {
	throw new Error("Function not implemented.");
}

