import React, { useState } from "react";
import { View, Text, Image, Linking, Touchable, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post.styles";
import { IPostProps } from "../types/post";
import { ICONS } from "@/shared/static/icons";
import { PostOptions } from "./postOptions";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Avatar } from "@/shared/components/avatar/avatar";
import { useActionMutation } from "../api/postApi";

export function Post(props: IPostProps) {
	const { post, isMine } = props;
	const [removed, setRemoved] = useState(false);
	const { token } = useAuthContext();
	const [action, { isLoading }] = useActionMutation()
	
	const[isLiked, setIsLiked] = useState(post.isLiked)
	const[isHearted, setisHearted] = useState(post.isHearted)
	// const avatarItem = post.author.profile?.avatar?.split("/").at(-1);

	const signatureItem = post.author.profile?.signature;
	const signatureUrl = signatureItem
		? `http://127.0.0.1:8000/media/crackedAvatars/${signatureItem.split("/").at(-1)}.jpg`
		: undefined;

	function openLink(link: string) {
		const normalized =
			link.startsWith("http://") || link.startsWith("https://")
				? link
				: `https://${link}`;
		Linking.canOpenURL(normalized)
			.then((supported: boolean) => {
				if (supported) {
					Linking.openURL(normalized);
				}
			})
			.catch(() => {
				console.warn("Не удалось открыть ссылку:", normalized);
			});
	}
	function like() {
		action({
			like: !isLiked,
			token, id: post.id
		})
		setIsLiked(prev=> !prev)
	}
	function heart() {
		action({
			love: !isHearted,
			token, id: post.id
		})
		setisHearted(prev=> !prev)
	}
	if (removed) return null;
	return (
		<View style={postStyles.card}>
			<View style={postStyles.header}>
				<View style={postStyles.topHeaderLine}>
					<View style={postStyles.iconWithTitle}>
						<Avatar
							image={post.author.profile?.avatar}
							style={postStyles.icon}
							id={null}
						/>
						<Text style={postStyles.title}>
							{post.author?.profile?.pseudonym}
						</Text>
					</View>
					{isMine && (
						<PostOptions
							post={post}
							token={token}
							remove={() => setRemoved(true)}
						/>
					)}
				</View>
				{signatureUrl ? (
					<Image
						source={{ uri: signatureUrl }}
						style={postStyles.signature}
					/>
				) : null}
			</View>
			<View style={postStyles.contentBlock}>
				<Text style={postStyles.title}>{post.title}</Text>
				<Text style={postStyles.content}>{post.content}</Text>
				<Text style={postStyles.content}>
					{post.tags.map((tag) => `#${tag.tag.name} `)}
				</Text>
				{post.links?.length ? (
					<View style={postStyles.linksBlock}>
						{post.links.map((linkItem, index) => (
							<Text
								key={index}
								style={postStyles.link}
								onPress={() => openLink(linkItem.link)}
							>
								{linkItem.link}
							</Text>
						))}
					</View>
				) : null}
				<View style={postStyles.imagesRow}>
					{post.images.map((img, idx) => (
						<Image
							key={idx}
							source={{
								uri: `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${img.compressed_image}.jpg`,
							}}
							style={postStyles.image}
						/>
					))}
				</View> 
				<View style={postStyles.footer}>
					<TouchableOpacity style={postStyles.footerItem} onPress={heart}> 
						<ICONS.Love fill={isHearted ? "red" : undefined}/>
						<Text>{post._count.hearts +Number(isHearted && !post.isHearted)} Вподобань</Text>
					</TouchableOpacity>
					<TouchableOpacity style={postStyles.footerItem} onPress={like}>
						<ICONS.Like fill={isLiked ? "red" : undefined}/>
						<Text>{post._count.likes +Number(isLiked && !post.isLiked)} Вподобань</Text>
					</TouchableOpacity>
					<View style={postStyles.footerItem}>
						<ICONS.View />
						<Text>{post._count.views} Переглядів</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
