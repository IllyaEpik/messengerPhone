import React from "react";
import {  Text,  ScrollView, View } from "react-native";
import FriendCard from "./friendCard";
import { styles } from "../styles/friends.styles";
import { friendsSectionProps } from "../types/friendSection";



export function FriendsSection(props: friendsSectionProps) {
    const { title, primaryAction, friends } = props;
    return (
        <View style={styles.section}>
            <View style={styles.headerSection}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text>Дивитись всі</Text>
            </View>
            {
                friends.map(friend => (
                    <FriendCard
                        name={friend.pseudonym}
                        username={friend.user?.username || ""}
                        primaryAction={primaryAction}
                        secondaryAction="Видалити"
                        friendAvatar={friend.avatar}
                    />
                ))
            }
        </View>
    );
};