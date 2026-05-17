import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, NativeScrollEvent, NativeSyntheticEvent, FlatList } from 'react-native';
import { postStyles } from '../styles/post.styles';
import { IPostList } from '../types/postList';
import { useAuthContext } from '@/modules/auth/context/authContext';
import { useGetPostsQuery } from '../api/postApi';
import { Post } from './Post';
import { IPost } from '../api/api.types';

export function PostList(props: IPostList) {
    const { isMine } = props
    const [skip, setSkip] = useState(0)
    const {token} = useAuthContext()
    const [staticPosts, setStaticPosts] = useState<IPost[]>([])
    const {data, isLoading} = useGetPostsQuery({
        token,
        isMine,
        skip:skip
    }, { skip: !token, pollingInterval: 5000 });
    useEffect(() => {
        const uniquePosts = data?.filter(post => !staticPosts.some(staticPost => staticPost.id === post.id)) || [];
        if (uniquePosts.length > 0) {
            setStaticPosts(prev => [...prev, ...uniquePosts]);
        }
        // if (data) {
        //     setStaticPosts(prev => [...prev, ...data])
        // }
    }, [data])
    function handleEndReached() {
        if (data !== undefined && data.length > 4 && !isLoading) {
            setSkip(skip => skip + 5)
        }
    }
    return <FlatList
        data={staticPosts}
        renderItem={({item}) => <Post post={item} isMine={isMine} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        >
        
    </FlatList>
    // <ScrollView onScroll={handleScroll}>
    //     {data?.map((post,i) => {
    //         return <Post 
    //         post={post} 
    //         key={i}

    //                         />
    //     })}
    // </ScrollView>
}
