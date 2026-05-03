import React, { FC } from "react";
import { View, Text,  TouchableOpacity } from "react-native";
import { styles } from "./friendCard.styles";
interface Props {
  name: string;
  username: string;
  primaryAction: string;
  secondaryAction: string;
}

function FriendCard({ name, username, primaryAction, secondaryAction }: Props) {
  return (
    <View style={styles.card}>

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

