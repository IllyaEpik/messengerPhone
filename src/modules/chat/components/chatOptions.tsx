import React, { useState } from "react";
import { Menu, Divider, Portal } from "react-native-paper";
import { Pressable } from "react-native";
import { ICONS } from "@/shared/static/icons";
import { styles } from "../styles/chatsOptions";
import { ChatModal } from "./createGroup/selectPeople";
import { router } from "expo-router";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useDeleteChatMutation } from "../api/chatApi";
import { IChat, IChatContactDetailed } from "../api/api.types";
interface IProps {
    isAdmin?: boolean,
    id: number
    chat: IChatContactDetailed
}

export function ChatOptions(props:IProps){
    const {isAdmin, id, chat} = props
    const { token } = useAuthContext()
    const [visible, setVisibility] = useState<boolean>(false)
    const [editing, setEditing] = useState<boolean>(false)
    const [deleteChat] = useDeleteChatMutation()
    function deletePostOption(){
        deleteChat({
            token,
            chatId:id
        })
        setVisibility(false)
        router.push("chat/")
    }
    return (
        <>
        <Menu
      visible={visible && !editing}
      onDismiss={() => setVisibility(false)}
      anchor={
        <Pressable onPress={() => setVisibility(true)}>
            <ICONS.OptionsIcon />
        </Pressable>
      }
      contentStyle={styles.menuCard}
    >
      <Menu.Item 
        leadingIcon= {ICONS.PublicIcon}
        onPress={() => {}} 
        title="Медіа" titleStyle={styles.menuText}
      />
      <Menu.Item 
        leadingIcon= {ICONS.Edit}
        onPress={() => setEditing(true)} 
        title="Редагувати групу" titleStyle={styles.menuText}
      />
      <Divider />
      <Menu.Item 
        leadingIcon= {ICONS.TrashIcon}
        onPress={deletePostOption} 
        title="Видалити групу" titleStyle={styles.menuText}
      />
    </Menu>
        <Portal>
            {/* <CreatePostModal  visible={editing} onClose={() => setEditing(false)} post={post}/> */}
            <ChatModal visible={editing} onCancel={() => setEditing(false)} isEdit chat={chat}/>
        </Portal>
    </>
    );
};
