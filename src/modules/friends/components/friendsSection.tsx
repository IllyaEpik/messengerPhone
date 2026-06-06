import React, { useState } from "react";
import {  Text,  ScrollView, View } from "react-native";
import FriendCard from "./friendCard";
import { styles } from "../styles/friends.styles";
import { friendsSectionProps } from "../types/friendSection";
import { FriendModal } from "./modal";
import { useConfirmRequestMutation, useSendRequestMutation } from "../api/friendsApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { router } from "expo-router";
import { useFriends } from "../context/storage";
import { useGetChatMutation } from "@/modules/chat/api/chatApi";


export function FriendsSection(props: friendsSectionProps) {
    const { title, primaryAction, friends, variant, setVariant } = props;
    const { exlude, apper } = useFriends();
    const [visible, setVisible] = useState(false);
    // const [confirm] = useConfirmRequestMutation()
    // const [sendRequest] = useSendRequestMutation()
    const {token} = useAuthContext()
    const [userId, setUserId] = useState(0);
    const [getChat] = useGetChatMutation();
    async function onConfirm(friendId: number) {        
        setVisible(false)
        if (props.variant === "requests") {
            // await confirm({token, fromUserId: friendId})
        }
        if (props.variant === "recommend") {
            // await sendRequest({token, profileId: friendId})
        }
        if (props.variant === "all"){
            const chat = await getChat({ friendId, token: token! }).unwrap();
            router.push({ pathname: '/chat/[id]/chat', params: { id: chat.id } });
            return
        }
        router.push(`friends/${props.variant}/${friendId}`)
    }
    
    return (
        <View style={styles.section}>
            <FriendModal isOpen={visible} userId={userId} setIsOpen={setVisible} variant={props.variant} friend={friends}/>
            <View style={styles.headerSection}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text
                    onPress={() => friends.length > 0 && setVariant(variant)}
                    style={friends.length > 0 ? styles.activeText : styles.crayText}
                >
                    Дивитись всі
                </Text>
            </View>
            {
                (() => {
                    const displayedFriends = [
                        ...friends,
                        ...apper[variant].filter(added => !friends.some(existing => existing.id === added.id))
                    ];

                    return displayedFriends.length > 0 ? (
                        displayedFriends.map((friend, index) => {
                            const isExcluded = exlude[variant]?.includes(friend.id) || index > 2 && !props.isSelected;
                            return isExcluded ? null : <FriendCard
                                key={friend.id}
                                name={friend.pseudonym}
                                variant={variant}
                                username={friend.user?.username || ""}
                                primaryAction={primaryAction}
                                secondaryAction="Видалити"
                                friendAvatar={friend.avatar}
                                firstAction={() => onConfirm(friend.id)}
                                secondAction={() => {
                                    setUserId(friend.id);
                                    setVisible(true);
                                }}
                            />
                        })
                    ) : (
                        <Text style={styles.crayText}>{props.noFriendsMessage}</Text>
                    )
                })()
            }
        </View>
    );
};