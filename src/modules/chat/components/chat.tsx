import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Avatar } from "@/shared/components/avatar/avatar";
// adjust path to your icons
import { styles } from "../styles/chat.styles"; // reuse your existing styles
import { ICONS } from "@/shared/static/icons";
import { router, useLocalSearchParams } from "expo-router/build/exports";
import { ICreateMessagePayload, IMessage } from "../api/api.types";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Message } from "./message";
import { useGetCurrentChatQuery, useGetMessagesQuery } from "../api/chatApi";
import { socket } from "@/shared/api/socket/socket";
import { ChatOptions } from "./chatOptions";
import { GroupAvatar } from "./groupAvatar";

const tabs = [
  { id: "contacts", label: "Контакти" },
  { id: "messages", label: "Повідомлення" },
  { id: "groups", label: "Групові чати" },
];

export function ChatScreen() {
    const { id, tabId } = useLocalSearchParams<{ id: string, tabId?:string }>();
    const activeTab = tabId || "contacts"
    const chatId = Number(id);
    const [messages, setMessages] = useState<IMessage[]>([]);
    console.log(messages);
    const { token, user } = useAuthContext();
    const chat = useGetCurrentChatQuery({
      chatId,
      token,
      userId: user?.id!
    }, {skip: 
      !chatId || 
      !token || 
      !user?.id
    })
    const { data } = useGetMessagesQuery({ chatId: chatId, token: token }, { skip: !token || !chatId });
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        if (data) {
            console.log(messages);
            setMessages(data);
        }
    }, [data]);
    useEffect(() => {
        socket.auth = {token: `Bearer ${token}`}
        socket.connect();
        socket.emit("chatConnect", { chatId }, (something) => {console.log(something)});
        socket.on("newMessage", (message: IMessage) => {
            console.log("New message received:", message);
            setMessages((prev) => [message, ...prev]);
        });
        return () => {
            socket.emit("leaveChat", { chatId });
            socket.off("newMessage");
            socket.disconnect();
        }
    }, []);
    // Placeholder handlers – replace with your actual send / attach logic
    function handleSend() {
    if (!inputText.trim()) return;
    const newMessage: ICreateMessagePayload = {
      text: inputText,
        chatId: chatId
    };
    socket.emit("sendMessage", newMessage);
    // setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  const handleAttachImage = () => {
    console.log("Attach image");
  };
  function handleBack(tabId?: string) {
    router.push({
    // Путь к целевой странице без динамических сегментов
    pathname: '/(tabs)/chat',
    // Параметры, которые вы хотите передать
    params: {tabId: tabId || activeTab}
  });
  }
  // function handleBack() {
  //   console.log("Go back");
  //   router.push("/chat/");
  // }
  return (
    <>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => handleBack(tab.id)}
          >
            {tab.id === "contacts" ? <ICONS.PeopleIcon/>: <ICONS.ChatIcon/>}
            <Text style={styles.tabText}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    <View style={styles.chatContainer}>
       <View style={styles.header}>
        <View style={styles.headerLeft}>
            <TouchableOpacity  style={styles.iconButton} onPress={() => handleBack()}>
                <ICONS.BackIcon />
            </TouchableOpacity>
            {
              chat.data?.isGroup ? 
              <GroupAvatar name={chat.data.chatName} avatar={chat.data.avatar} style={styles.avatar}/> :
              <Avatar style={styles.avatar} image={chat.data?.avatar}/>
            }
            <View style={styles.headerCenter}>
                
                <Text style={styles.groupName}>{chat.data?.chatName}</Text>
                <Text style={styles.memberStatus}>3 учасники, 1 в перехід</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
            {/* <ICONS.OptionsIcon /> */}
            <ChatOptions isAdmin={chat.data?.isAdmin} id={chatId} chat={chat.data!} isChat={!chat.data?.isGroup}/>
        </TouchableOpacity>
        </View>
      <FlatList
        data={messages} // Mark messages as own based on senderId
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Message message={item} isOwn={item.senderId === user?.id} />}
        contentContainerStyle={styles.chatList}
        inverted={false}
      />

      {/* Input panel with image attach and send button */}
      <View style={styles.inputPanel}>
        <TextInput
          style={styles.chatInput}
          placeholder="Повідомлення"
          placeholderTextColor="#81818D"
          value={inputText}
          onChangeText={setInputText}
          
        />
        <TouchableOpacity onPress={handleAttachImage} style={styles.attachButton}>
          <ICONS.PublicIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSend} style={[styles.attachButton, styles.sendButton]}>
          <ICONS.SendIcon />
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}
function useParams() {
    throw new Error("Function not implemented.");
}

