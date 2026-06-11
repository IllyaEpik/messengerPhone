import React, { useRef, useState } from "react";
import {
	Modal,
	View,
	Text,
	Pressable,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { createPostModalStyles } from "../styles/createPostModal.styles";
import { ICONS } from "@/shared/static/icons";
import { Input } from "../../../shared/components/Input/Input";
import { ImageInput } from "@/shared/components/ImageInput/ImageInput";
import { useCreatePostMutation, useEditPostMutation } from "../api/postApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IPost } from "../api/api.types";
import { Tag } from "./Tag";
interface CreatePostModalProps {
	visible: boolean;
	onClose: () => void;
	post?: IPost;
}

export function CreatePostModal(props: CreatePostModalProps) {
	const { visible, onClose, post } = props;
	const [createPost] = useCreatePostMutation();
	const [editPost] = useEditPostMutation();
	const { token } = useAuthContext();
	const initialLinks = post?.links?.map((l) => l.link) ?? [];
	const [links, setLinks] = useState<string[]>(
		initialLinks.length ? [...initialLinks, ""] : [""],
	);
	const [title, setTitle] = useState<string>(post?.title || "");
	const [topic, setTopic] = useState<string>(post?.topic || "");
	const [content, setContent] = useState<string>(post?.content || "");
	const [images, setImages] = useState<string[]>([]);
	const [wrirtingText, setWritingText] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>(
		post?.tags
		?.map((tag) => tag.tag) ?? [],
	);
	const inputTag = useRef<TextInput>(null);
	const tagsList = [
		"відпочинок",
		"натхнення",
		"життя",
		"природа",
		"читання",
		"спокій",
		"гармонія",
		"музика",
		"фільми",
		"подорожі",
	];
	function addImage(image: string) {
		setImages([...images, image]);
	}
	function setIsWritingTag(){
		inputTag.current?.focus()
	}
	function addTag(tag: string) {
		setWritingText("")
		setSelectedTags((prev) => [...prev, tag ])
	}
	function removeTag(tag: string) {
		setSelectedTags(prev => prev.filter((selectedTag) => selectedTag !== tag))
	}
	function toggleTag(tag: string) {
		selectedTags.includes(tag) ?
			removeTag(tag) : addTag(tag)

	}
	function updateLink(index: number, value: string) {
		setLinks((prev) =>
			prev.map((item, idx) => (idx === index ? value : item)),
		);
	}

	function addLinkField() {
		setLinks((prev) => [...prev, ""]);
	}

	function removeLink(index: number) {
		setLinks((prev) => prev.filter((_, idx) => idx !== index));
	}

	async function handleSubmit() {
		const filteredLinks = links
			.map((link) => link.trim())
			.filter((link) => link.length > 0);
		if (post) {
			await editPost({
				id: post.id,
				title,
				token,
				content,
				topic,
				tags: selectedTags,
				images,
				links: filteredLinks,
			});
		} else {
			await createPost({
				title,
				token,
				content,
				topic,
				tags: selectedTags,
				images,
				links: filteredLinks,
			});
		}
		setTitle("");
		setTopic("");
		setContent("");
		setSelectedTags([]);
		setLinks([""]);
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
						<Pressable
							onPress={onClose}
							style={createPostModalStyles.closeButton}
						>
							<ICONS.ExitIcon />
						</Pressable>
					</View>
					<Text style={createPostModalStyles.title}>
						{!post
							? "Створення публікації"
							: "Редагування публікації"}
					</Text>
					<ScrollView
						contentContainerStyle={createPostModalStyles.scrollView}
					>

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
							{tagsList.map((tag) => {
								const isSelected = selectedTags.includes(tag);
								return (
									<Tag isSelected={isSelected} tag={tag} onPress={toggleTag} />
								);
							})}
							{selectedTags.map(tag  => {
								const isNotInBasic = !tagsList.includes(tag);
								if (!isNotInBasic) return null
								return (
									<Tag isSelected={true} tag={tag} onPress={removeTag} />
								);
							})
								
							}
							<TextInput 
							ref={inputTag} 
							onBlur={(event) => addTag(wrirtingText)}
							onChangeText={setWritingText}
							value={wrirtingText}
							/>
							<TouchableOpacity style={createPostModalStyles.plusButton} onPress={() => setIsWritingTag()}>
								<ICONS.PlusIcon />
							</TouchableOpacity>
						</View>
						<View style={createPostModalStyles.textarea}>
							<TextInput
								placeholder="Текст публікації"
								value={content}
								onChangeText={setContent}
								multiline
							/>
							<Text style={createPostModalStyles.tagText}>
								{selectedTags.map((tag) => `#${tag} `)}
							</Text>
						</View>
						<View style={createPostModalStyles.links}>
							{links.map((linkText, index) => {
								const isLast = links.length - 1 === index;
								const isFirst = index === 0;
								const isAlone = links.length === 1;
								return (
									<Input
										placeholder="https://www.instagram.com/"
										value={linkText}
										onChangeText={(value) =>
											updateLink(index, value)
										}
										error=""
										label={isFirst ? "Посилання" : ""}
										containerInputStyles={{ flex: 1 }}
										icon={
											<View
												style={
													createPostModalStyles.icons
												}
											>
												{isLast ? (
													<TouchableOpacity
														onPress={addLinkField}
														style={
															createPostModalStyles.plusButton
														}
													>
														<ICONS.PlusIcon />
													</TouchableOpacity>
												) : null}
												{!isAlone && isLast ? (
													<TouchableOpacity
														style={
															createPostModalStyles.plusButton
														}
														onPress={() =>
															removeLink(index)
														}
													>
														<ICONS.ExitIcon />
													</TouchableOpacity>
												) : null}
											</View>
										}
									/>
								);
							})}
						</View>
						{images.map((image, index) => {
							return (
								<View
									style={createPostModalStyles.imageContainer}
									key={index}
								>
									<Image
										style={createPostModalStyles.image}
										source={{ uri: image }}
										resizeMode="contain"
									/>
									<View
										style={[
											createPostModalStyles.buttonIcon,
											createPostModalStyles.trashIcon,
										]}
									>
										<ICONS.TrashIcon />
									</View>
								</View>
							);
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
								<Text
									style={
										createPostModalStyles.submitButtonText
									}
								>
									{!post ? "Публікація" : "Публікація"}
								</Text>
								<ICONS.SendIcon />
							</Pressable>
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
}
