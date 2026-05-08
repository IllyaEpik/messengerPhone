import React, { useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "../styles/friends.styles";
import { FriendsSection } from "./friendsSection";
import { friendMenuVariant } from "../types/friendMenu";
import { FriendMenu } from "./friendMenu";

export function FriendsScreen() {
  const [page, setPage] = useState<friendMenuVariant>("main")
  const friends = [
    {
      name: "Yehor Aung",
      username: "@thelii",
      avatar: "https://avatars.githubusercontent.com/u/106783863?v=4"
     }
  ]
  return (
    <>
      <FriendMenu 
        variant={page}
        setVariant={setPage}
      />
    <ScrollView style={styles.container}>
      <FriendsSection 
        title="Запити"

        primaryAction="Підтвердити"
        friends={friends}
      />

      <FriendsSection 
        title="Рекомендації"

        primaryAction="Додати"
        friends={friends}
      />
      <FriendsSection 
        title="Всі друзі"

        primaryAction="Повідомлення"
        friends={friends}
      />
    </ScrollView>
    </>
  );
};