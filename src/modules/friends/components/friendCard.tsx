import React, { FC } from "react";
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/friendCard.styles";
import { Props } from "../types/friendCard";
// ? `http://192.168.0.146:8000/${ }`
function FriendCard({ name, username, primaryAction, secondaryAction,friendAvatar }: Props) {
  return (
    <View style={styles.card}>
      <Image
              style={styles.avatar}
              source={friendAvatar ? {uri: `http://192.168.0.146:8000/${friendAvatar}`} : require("../../../media/icon/user.png")}
              resizeMode="contain"
            />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>{username}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>{primaryAction}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>{secondaryAction}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendCard;

