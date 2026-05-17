
import { Image } from "react-native";
import { styles } from "./avatar.style";

interface IProps {
  image:string, 
  style?: object
}

export function Avatar(props:IProps) {
    const {
        style,
        image
    } = props
    return <Image
                  style={[styles.avatar,style]}
                  source={image ? {uri: 
                    `http://127.0.0.1:8000/media/${image}`} : 
                    require("../../../media/icon/user.png")}
                  resizeMode="contain"
                />
}