import React from 'react';
import { View, Text, Image } from 'react-native';
import { postStyles } from '../styles/post.styles';

export interface PostData {
  title: string;
  topic: string;
  content: string;
  link: string;
  images: string[];
}

  <View style={postStyles.card}>
    <Text style={postStyles.title}>{post.title}</Text>
    <Text style={postStyles.topic}>{post.topic}</Text>
    <Text style={postStyles.content}>{post.content}</Text>
    {post.link ? <Text style={postStyles.link}>{post.link}</Text> : null}
    <View style={postStyles.imagesRow}>
      {post.images.map((img, idx) => (
        <Image key={idx} source={{ uri: img }} style={postStyles.image} />
      ))}
    </View>
  </View>
);

export default Post;
