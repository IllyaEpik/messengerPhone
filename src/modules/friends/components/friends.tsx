import React, { use, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles/friends.styles";
import { FriendsSection } from "./friendsSection";
import { friendMenuVariant } from "../types/friendMenu";
import { FriendMenu } from "./friendMenu";
import { useGetFriendsDataQuery } from "../api/friendsApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { FriendModal } from "./modal";
import { FriendsProvider, useFriends } from "../context/storage";

export function FriendsScreen() {
  const [page, setPage] = useState<friendMenuVariant>("main")
  const { token } = useAuthContext()
  const { clear } = useFriends();
  const [recommendPage, setRecommendPage] = useState<number>(1)
  const [requestPage, setRequestPage] = useState<number>(1)
  const { data  } = useGetFriendsDataQuery({token,pagination:{
    recommends:recommendPage,
    requests:requestPage
  }}, { skip: !token, pollingInterval: 500000 })
  const friends = data
  
  useEffect(()=>{
    clear()
  },[data])
  return (
    <View>
      <FriendMenu 
        variant={page}
        setVariant={setPage}
      />
    <ScrollView style={styles.container}>
      <View style={{gap:8}}>

      
      {(page === "main" || page === "requests") ?
      <FriendsSection 
        title="Запити"
        variant="requests"
        primaryAction="Підтвердити"
        friends={friends?.friendRequests || []}
        noFriendsMessage="У тебе поки немає запитів"
        setVariant={setPage}
        isSelected={page==="requests"}
      /> : null}
      {(page === "main" || page === "recommend") ?
      <FriendsSection 
        title="Рекомендації"
        variant="recommend"
        primaryAction="Додати"
        friends={friends?.friendsRecommneds || []}
        noFriendsMessage="У тебе поки немає рекомендацій"
        setVariant={setPage}
        isSelected={page==="recommend"}
      /> : null}
      {(page === "main" || page === "all") ?
      <FriendsSection 
        title="Всі друзі"
        variant="all"
        primaryAction="Повідомлення"
        friends={friends?.friends || []}
        noFriendsMessage="У тебе поки немає доданих друзів"
        setVariant={setPage}
        isSelected={page==="all"}
      />: null}
      <View style={{height: 180}}/>
      </View>
    </ScrollView>
    </View>
  );
};
// 