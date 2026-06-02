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
import { useGetMessagesQuery } from "../api/chatApi";
import { socket } from "@/shared/api/socket/socket";


export function ChatScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const chatId = Number(id);
    const [messages, setMessages] = useState<IMessage[]>([]);
    console.log(messages);
    const { token, user } = useAuthContext();
    const { data } = useGetMessagesQuery({ chatId: chatId, token: token }, { skip: !token || !chatId });
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        if (data) {
            console.log(messages, data);
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
        console.log("Chat ID:", chatId);
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
  function handleBack() {
    console.log("Go back");
    router.push("/chat/");
  }
//   const renderMessage = ({ item }: { item: IMessage }) => (
//     <View style={[styles.messageRow, item.isOwn ? styles.myMessageRow : styles.theirMessageRow]}>
//       {!item.isOwn && (
//         <Avatar
//           style={styles.messageAvatar}
//         //   image={item.avatar} 
//         />
//       )}
//       <View style={[styles.messageBubble, item.isOwn ? styles.myBubble : styles.theirBubble]}>
//         <View>
//             {!item.isOwn && <Text style={styles.senderName}>{item.senderName}</Text>}
//             <Text style={styles.messageText}>{item.text}</Text>
//         </View>
//         <View style={styles.deteils}>

//             <Text style={styles.messageTime}>{item.timestamp}</Text>
//             <ICONS.checkmark/>
//         </View>

//       </View>
//     </View>
//   );

  return (
    <View style={styles.chatContainer}>
       <View style={styles.header}>
        <View style={styles.headerLeft}>
            <TouchableOpacity  style={styles.iconButton} onPress={handleBack}>
                <ICONS.BackIcon />
            </TouchableOpacity>
            <Avatar style={styles.avatar} />
            <View style={styles.headerCenter}>
                
                <Text style={styles.groupName}>New Group</Text>
                <Text style={styles.memberStatus}>3 учасники, 1 в перехід</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
            <ICONS.OptionsIcon />
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
  );
}
function useParams() {
    throw new Error("Function not implemented.");
}

