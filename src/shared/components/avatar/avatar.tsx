import { Image } from "react-native";
import { styles } from "./avatar.style";

interface IProps {
	image?: string;
	style?: object;
	local?: boolean;
}
export function Avatar(props: IProps) {
	const { style, image, local } = props;
	console.log(image);
	let path = local
		? image
		: `http://10.0.2.2:8000/media/crackedAvatars/${image}`;
	if (image === "avatar.png") {
		console.log(13132123123);
		path = `http://10.0.2.2:8000/media/${image}`;
	}
	return (
		<Image
			style={[styles.avatar, style]}
			source={
				image ? { uri: path } : require("../../../media/icon/user.png")
			}
			resizeMode="contain"
		/>
	);
}
