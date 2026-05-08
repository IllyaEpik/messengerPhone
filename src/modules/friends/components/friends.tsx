import React, { use, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "../styles/friends.styles";
import { FriendsSection } from "./friendsSection";
import { friendMenuVariant } from "../types/friendMenu";
import { FriendMenu } from "./friendMenu";
import { useGetFriendsDataQuery } from "../api/friendsApi";
import { useAuthContext } from "@/modules/auth/context/authContext";

export function FriendsScreen() {
  const [page, setPage] = useState<friendMenuVariant>("main")
  const {token} = useAuthContext()
  // const friends = [
  //   {
  //     name: "Yehor Aung",
  //     username: "@thelii",
  //     avatar: "https://avatars.githubusercontent.com/u/106783863?v=4"
  //    }
  // ]
  const friends = useGetFriendsDataQuery(token).data
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
        friends={friends?.friendRequests || []}
      />

      <FriendsSection 
        title="Рекомендації"

        primaryAction="Додати"
        friends={friends?.friendRequests || []}
      />
      <FriendsSection 
        title="Всі друзі"

        primaryAction="Повідомлення"
        friends={friends?.friends || []}
      />
    </ScrollView>
    </>
  );
};