import React from 'react';
import { View, Text, Image } from 'react-native';
import { postStyles } from '../styles/post.styles';
import { IPostProps } from '../types/post';
import { ICONS } from '@/shared/static/icons';


export function Post(props: IPostProps) {
  	const {post} = props
	console.log(post)
	const avatarItem = post.author.profile?.avatar?.split("/").at(-1);
	const avatarUrl = avatarItem
	? `http://192.168.0.146:8000/media/crackedAvatars/${avatarItem}`
	: undefined;
	const signatureItem = post.author.profile?.signature
	const signatureUrl = signatureItem
	? `http://192.168.0.146:8000/media/crackedAvatars/${signatureItem.split("/").at(-1)}.jpg`
	: undefined;

	return <View style={postStyles.card}>
		<View style={postStyles.header}>
		<View style={postStyles.topHeaderLine}>
			{/* <View> */}
				<View style={postStyles.iconWithTitle}>
					{avatarUrl ?
						<Image source={{ uri: avatarUrl }} style={postStyles.icon} 
						/>
						:
						<Image source={require("../../../media/icon/user.png")} style={postStyles.icon} />
					}
					<Text style={postStyles.title}>{post.author?.profile?.pseudonym}</Text>

				</View>
				<ICONS.OptionsIcon/>
				
		</View>
		<Image  source={{uri: signatureUrl}} style={postStyles.signature} />
		</View>
		{/* <Text style={postStyles.topic}>{post.topic}</Text> */}
		<View style={postStyles.contentBlock}>
			<Text style={postStyles.title}>{post.title}</Text>
			<Text style={postStyles.content}>{post.content}</Text>
			<View style={postStyles.imagesRow}>
				
				{post.images.map((img, idx) => (
					<>
					<Image key={idx} source={{ uri: `http://192.168.0.146:8000/media/crackedAvatars/${img.image}` }} style={postStyles.image} />
					</>
				))}
			</View>
			<View style={postStyles.footer}>
				<View style={postStyles.footerItem}>
					<ICONS.Love/>
					<Text>{post._count.loves} Вподобань</Text>
				</View>
				<View style={postStyles.footerItem}>
					<ICONS.Like/>
					<Text>{post._count.likes} Вподобань</Text>
				</View>
				<View style={postStyles.footerItem}>
					<ICONS.View/>
					<Text>{post._count.views} Переглядів</Text>
				</View>
			</View>
		</View>
		{/* {post.links ? <Text style={postStyles.link}>{post.links[0]}</Text> : null} */}
		
	</View>
}
