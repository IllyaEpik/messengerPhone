import { View, Text } from "react-native";
import { styles } from "../styles/chat.styles";
import { IMessage } from "../api/api.types";
import { ICONS } from "@/shared/static/icons/icons";
import { Avatar } from "@/shared/components/avatar/avatar";

type MessageProps = {
    message: IMessage;
    isOwn: boolean;
}

export function Message({ message, isOwn }: MessageProps) {
    return <View style={[styles.messageRow, isOwn ? styles.myMessageRow : styles.theirMessageRow]}>
          {!isOwn && (
            <Avatar
              style={styles.messageAvatar}
            //   image={message.avatar} 
            />
          )}
          <View style={[styles.messageBubble, isOwn ? styles.myBubble : styles.theirBubble]}>
            <View>
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