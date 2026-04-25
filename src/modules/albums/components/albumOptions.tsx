import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { Avatars } from "./avatars";
import { Footer } from "./footer";
import { styles } from "../styles/albumOptions";
import { useState } from "react";
import { ICONS } from "@/shared/static/icons";
import { Menu, Divider, Portal} from 'react-native-paper';
import { useDeleteAlbumMutation } from "../api/albumApi";
import { AlbumModal } from "./albumModal";
import { Album } from "../api/api.types";

interface IProps {
    album:Album,
    token:string
}

export function AlbumOptions(props:IProps){
    const {album,token} = props
    const [visible, setVisibility] = useState<boolean>(false)
    const [editing, setEditing] = useState<boolean>(false)
    const [deleteAlbum] = useDeleteAlbumMutation()
    function deleteAlbumOption(){
        deleteAlbum({
            token,
            id:album.id
        })
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
        leadingIcon = {ICONS.openIcon}
        onPress={() => {}} 
        title="Цей альбом бачите не тільки ви" 
        titleStyle={styles.menuText}
      />
      <Menu.Item 
        leadingIcon= {ICONS.Edit}
        onPress={() => setEditing(true)} 
        title="Редагувати альбом" titleStyle={styles.menuText}
      />
      <Divider />
      <Menu.Item 
        leadingIcon= {ICONS.TrashIcon}
        onPress={deleteAlbumOption} 
        title="Видалити альбом" titleStyle={styles.menuText}
      />
    </Menu>
        <Portal>
            <AlbumModal isEdit={true} isOpen={editing} close={() => setEditing(false)} album={album}/>
        </Portal>
    </>
    );
};
