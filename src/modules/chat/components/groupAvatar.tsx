
import { Image, View, Text } from "react-native";
import { styles } from "../styles/chatCont.styles";

interface IProps {
    style?: object
    avatar?: string
    name: string
    local?: boolean
}
export function GroupAvatar(props:IProps) {
    const {
        style,
        avatar,
        name,
        local
    } = props

    let path = local ? avatar :`http://10.0.2.2:8000/media/crackedAvatars/${avatar}`
    if (avatar === "avatar.png"){
      path = ""
    }
    return <>
        {path ?<Image
                  style={[styles.avatar,style]}
                  source={avatar ? {uri: 
                    path} : 
                    require("../../../media/icon/user.png")}
                  resizeMode="contain"
                /> :
                <View style={[styles.groupAvatar, style]}>
                                <Text style={styles.groupAvatarText}>
                                  {name
                                  .split(" ").map((text, i) => {return i < 2 ? text[0] : ""})
                                  .join("").toUpperCase()}
                                </Text>
                              </View> }
    </>
}