import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/chat.styles";
import { IMessage } from "../api/api.types";
import { ICONS } from "@/shared/static/icons/icons";
import { Avatar } from "@/shared/components/avatar/avatar";

type MessageProps = {
    message: IMessage;
    isOwn: boolean;
}

export function Message({ message, isOwn }: MessageProps) {
  console.log(message.messageImage) 
    const path = `http://10.0.2.2:8000/media/crackedAvatars/`
    return <View style={[styles.messageRow, isOwn ? styles.myMessageRow : styles.theirMessageRow]}>
          {!isOwn && (
            <Avatar
              style={styles.messageAvatar}
            //   image={message.avatar} 
            />
          )}
          <View style={[styles.messageBubble, isOwn ? styles.myBubble : styles.theirBubble]}>
            <View>

                <ScrollView horizontal style={styles.images}>
                  
                    {
                      message.messageImage.map((image) => (<Image
                        // style={[styles.avatar]}
                        style={{ width: 100, height: 100, backgroundColor: 'blue' }} 
                        source={{uri: path + image.image}}
                        resizeMode="contain"
                      />
                      ))
                    }
              </ScrollView>
                {!isOwn && <Text style={styles.senderName}>{message.sender?.username}</Text>}
                <Text style={styles.messageText}>{message.text}</Text>
            </View>
            <View style={styles.deteils}>
                {/* <Text style={styles.messageTime}>{typeof message.created_at === "string" ? message.created_at || "00:00" : message.created_at?.toLocaleTimeString() || "00:00"}</Text> */}
                <Text style={styles.messageTime}>00:00</Text>
                <ICONS.checkmark/>
            </View>
    
          </View>
        </View>
}