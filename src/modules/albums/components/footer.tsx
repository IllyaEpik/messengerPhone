import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../styles/avatars";
import { ICONS } from "@/shared/static/icons";
import { useState } from "react";
import { AlbumModal } from "./albumModal";

export function Footer(){
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <View style= {styles.card}>
          <View style={styles.header}>
              <Text style = {styles.noOne}>Немає ще жодного альбому</Text>
              <Pressable style={styles.publicButton} onPress={() => setIsOpen(!isOpen)}>
                  <ICONS.PlusIcon/>
              </Pressable>
          </View>
      </View>
      <AlbumModal isOpen={isOpen} isEdit={false} close={()=>setIsOpen(false)}/>
    </>
  );
};
