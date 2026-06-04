import React, { useState }from "react";
import { Modal, View, Text, Pressable, ScrollView, Image } from "react-native";
import { createPostModalStyles } from "../styles/createPostModal.styles";
import { ICONS } from "@/shared/static/icons";
import { Input } from "../../../shared/components/Input/Input";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useCreatePostMutation, useEditPostMutation } from "../api/postApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IPost } from "../api/api.types";
interface CreatePostModalProps {
	visible: boolean;
	onClose: () => void;
	post?:IPost
}

export function CreatePostModal(props: CreatePostModalProps) {
	const { visible, onClose, post } = props;
	const [createPost] = useCreatePostMutation()
	const [editPost] = useEditPostMutation()
	const {token} = useAuthContext()
	const initialLinks = post?.links?.map(l => l.link) ?? []
	const [links, setLinks] = useState<string[]>(initialLinks.length ? [...initialLinks, ""] : [""])
	const [title, setTitle] = useState<string>( post?.title || "")
	const [topic, setTopic] = useState<string>( post?.topic || "")
	const [content, setContent] = useState<string>( post?.content || "")
	const [images, setImages] = useState<string[]>(  [])
	// post?.images?.map((img) => img.image) ||
	const tagsList = ['відпочинок','натхнення','життя','природа','читання','спокій','гармонія','музика','фільми','подорожі'];
	function addImage(image:string) {
		setImages([...images, image])
	}

	function updateLink(index:number, value:string) {
		setLinks(prev => prev.map((item, idx) => idx === index ? value : item));
	}

	function addLinkField() {
		setLinks(prev => [...prev, ""]);
	}

	function removeLink(index:number) {
		setLinks(prev => prev.filter((_, idx) => idx !== index));
	}
	
	async function handleSubmit() {
		const filteredLinks = links.map(link => link.trim()).filter(link => link.length > 0)
		if (post) {
			await editPost({
				id: post.id,
				title,
				token,
				content,
				topic,
				images,
				links: filteredLinks,
			})
		}else{
			await createPost({
				title,
				token,
				content,
				topic,
				images,
				links: filteredLinks,
			});
		}
		setTitle("");
		setTopic("");
		setContent("");
		setLinks([""])
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
					{!post ? 
					"Створення публікації" :
					"Редагування публікації"}
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
						{links.map((linkText, index) => {
							const isLast = index === links.length - 1;
							return (
								<View key={index} style={createPostModalStyles.linkFieldRow}>
									<Input 
										placeholder="https://www.instagram.com/"
										value={linkText}
										onChangeText={(value) => updateLink(index, value)}
										error=""
										label={index === 0 ? "Посилання" : ""}
										containerInputStyles={{ flex: 1 }}
										icon={isLast ? (
											<View style={createPostModalStyles.plusButton}>
												<ICONS.PlusIcon />
											</View>
										) : undefined}
										onIconPress={isLast ? addLinkField : undefined}
									/>
									{links.length > 1 && (
										<Pressable onPress={() => removeLink(index)} style={createPostModalStyles.removeLinkButton}>
											<ICONS.TrashIcon />
										</Pressable>
									)}
								</View>
							)
						})}
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
							<Text style={createPostModalStyles.submitButtonText}>
								{!post ? 
					"Публікація" :
					"Публікація"}</Text>
							<ICONS.SendIcon/>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</View>
		</Modal>
	);
};