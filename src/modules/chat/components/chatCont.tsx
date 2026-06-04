import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/chatCont.styles";
import { useGetChatMutation, useGetChatsQuery } from "../api/chatApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useGetFriendsDataQuery } from "@/modules/friends/api/friendsApi";
import { Avatar } from "@/shared/components/avatar/avatar";
// import { router } from "expo-router/build/exports";
import { router } from "expo-router";
import { ICONS } from "@/shared/static/icons";

const tabs = [
  { id: "contacts", label: "Контакти" },
  { id: "messages", label: "Повідомлення" },
  { id: "groups", label: "Групові чати" },
];

export function ContactsScreen(){
  const [activeTab, setActiveTab] = useState("contacts");
  const { user, token } = useAuthContext();
  const [getChat] = useGetChatMutation();
  const chats = useGetChatsQuery({ userId: user?.id!, token: token }, { skip: !user?.id || !token });
  console.log(chats)
  const friends = useGetFriendsDataQuery({  token: token, pagination: { recommends: 0, requests: 0 } }, { skip: !user?.id || !token });
  const activeTabLabel = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.label ?? "Контакти",
    [activeTab]
    
  );
  async function openChatContact(friendId: number) {
      const chat = await getChat({ friendId, token: token! }).unwrap();
      router.push({ pathname: '/chat/[id]/chat', params: { id: chat.id } });
  }
  function openChat(chatId: number) {
    router.push({ pathname: '/chat/[id]/chat', params: { id: chatId } });
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => setActiveTab(tab.id)}
          >
            {tab.id === "contacts" ? <ICONS.PeopleIcon/>: <ICONS.ChatIcon/>}
            <Text style={styles.tabText}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>{activeTabLabel}</Text>

      <TextInput placeholder="Пошук" placeholderTextColor="#999" style={styles.searchInput} />

      {activeTab === "contacts" && (
        friends.data?.friends ? (
          <FlatList
            data={friends.data?.friends}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.contactItem} onPress={() => openChatContact(item.userId)}>
                {/* image={item.avatar} */}
                <Avatar style={styles.avatar}/>
                <Text style={styles.contactName}>{item.pseudonym || "unknown"}</Text>
              </TouchableOpacity>
            )}
          />
        ) : <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>У тебе поки що немає контактів.</Text>
        </View>
      )}

      {activeTab === "messages" && (
        chats.data && chats.data.filter(chat => !chat.isGroup).length > 0 ? (
        <FlatList
            data={chats.data.filter(chat => !chat.isGroup)}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.contactItem} onPress={() => openChat(item.id)}>
                {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
                {/*  image={item.avatar} */}
                <Avatar style={styles.avatar}/>
                <Text style={styles.contactName}>{item.chatName || "unknown"}</Text>
              </TouchableOpacity>
            )}
          />
        ) : 
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>У тебе поки що немає повідомлень.</Text>
        </View>
      )}

      {activeTab === "groups" && (

        chats.data && chats.data.filter(chat => chat.isGroup).length > 0 ? (
        <FlatList
          data={chats.data.filter(chat => chat.isGroup)}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.groupItem} onPress={() => openChat(item.id)}>
              <View style={styles.groupAvatar}>
                <Text style={styles.groupAvatarText}>
                  {item.chatName
                  .split(" ").map((text, i) => {return i < 2 ? text[0] : ""})
                  .join("").toUpperCase()}
                </Text>
              </View>
              <View style={styles.groupInfo}>
                <View style={styles.groupHeader}>
                  <Text style={styles.contactName}>{item.chatName}</Text>
                  <Text style={styles.groupTime}>{typeof item.time === "string" ? item.time : "00:00"}</Text>
                </View>
                <Text style={styles.groupMessage}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        ) :
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>У тебе поки що немає груп.</Text>
        </View>
      )}
    </View>
  );
};

