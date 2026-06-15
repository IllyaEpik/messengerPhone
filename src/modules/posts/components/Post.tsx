import React, { useState } from "react";
import { View, Text, Image, Linking } from "react-native";
import { postStyles } from "../styles/post.styles";
import { IPostProps } from "../types/post";
import { ICONS } from "@/shared/static/icons";
import { PostOptions } from "./postOptions";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Avatar } from "@/shared/components/avatar/avatar";

export function Post(props: IPostProps) {
	const { post, isMine } = props;
	const [removed, setRemoved] = useState(false);
	const { token } = useAuthContext();
	const avatarItem = post.author.profile?.avatar?.split("/").at(-1);

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

	if (removed) return null;
	console.log(post.author)
	return (
		<View style={postStyles.card}>
			<View style={postStyles.header}>
				<View style={postStyles.topHeaderLine}>
					<View style={postStyles.iconWithTitle}>
						<Avatar 
						image={post.author.profile?.avatar} 
						style={postStyles.icon} 
						id={post.author.profile?.userId!}/>
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
				<Image
					source={{ uri: signatureUrl }}
					style={postStyles.signature}
				/>
			</View>
			<View style={postStyles.contentBlock}>
				<Text style={postStyles.title}>{post.title}</Text>
				<Text style={postStyles.content}>{post.content}</Text>
				<Text style={postStyles.content}>{post.tags.map(tag => `#${tag.post_app_tag.name} `)}</Text>
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
								uri: `http://10.0.2.2:8000/media/crackedAvatars/${img.image}.jpg`,
							}}
							style={postStyles.image}
						/>
					))}
				</View>
				<View style={postStyles.footer}>
					<View style={postStyles.footerItem}>
						<ICONS.Love />
						<Text>{post._count.hearts} Вподобань</Text>
					</View>
					<View style={postStyles.footerItem}>
						<ICONS.Like />
						<Text>{post._count.likes} Вподобань</Text>
					</View>
					<View style={postStyles.footerItem}>
						<ICONS.View />
						<Text>{post._count.views} Переглядів</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
