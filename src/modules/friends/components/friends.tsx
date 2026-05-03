import React from "react";
import {  Text,  ScrollView } from "react-native";
import FriendCard from "./../../../shared/components/friendCard/friendCard";
import { styles } from "../styles/friends.styles";

function FriendsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Запити</Text>
      <FriendCard
        name="Yehor Aung"
        username="@thelii"
        primaryAction="Підтвердити"
        secondaryAction="Видалити"
      />


      <Text style={styles.sectionTitle}>Рекомендації</Text>
      <FriendCard
        name="Ann Ann"
        username="@thelii"
        primaryAction="Додати"
        secondaryAction="Видалити"
      />


      <Text style={styles.sectionTitle}>Всі друзі</Text>
      <FriendCard
        name="Yehor Aung"
        username="@thelii"
        primaryAction="Повідомлення"
        secondaryAction="Видалити"
      />
    </ScrollView>
  );
};