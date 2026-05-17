import React, { FC } from "react";
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/friendCard.styles";
import { Props } from "../types/friendCard";
function FriendCard({ name, username, primaryAction, secondaryAction,friendAvatar, secondAction, firstAction }: Props) {
  return (
    <View style={styles.card}>
      <Image
              style={styles.avatar}
              source={friendAvatar ? {uri: 
                `http://127.0.0.1:8000/media/${friendAvatar.split("/").at(-1)}`} : 
                require("../../../media/icon/user.png")}
              resizeMode="contain"
            />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>{username}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={firstAction}>
          <Text style={styles.primaryText}>{primaryAction}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={secondAction}>
          <Text style={styles.secondaryText}>{secondaryAction}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendCard;

