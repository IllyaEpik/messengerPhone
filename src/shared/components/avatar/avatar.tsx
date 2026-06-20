import { Image, ImageStyle, View, ViewStyle } from "react-native";
import { styles } from "./avatar.style";
import { useEffect, useMemo, useState } from "react";
import { socket } from "@/shared/api/socket/socket";
import { useAuthContext } from "@/modules/auth/context/authContext";

interface IProps {
	image?: string;
	style?: ImageStyle;
	local?: boolean;
	id: number | null;
	size?: number;
}
export function Avatar(props: IProps) {
	const { style, image, local, id } = props;
	const { token } = useAuthContext();
	const [isOnline, setIsOnline] = useState<boolean>(false);
	let path = local
		? image
		// : `http://10.0.2.2:8000/media/crackedAvatars/${image}`;
		: `https://res.cloudinary.com/do0hrac1e/image/upload/thumb/${image}.jpg`
	if (image === "avatar.png") {
		path = `http://10.0.2.2:8000/media/${image}`;
	}
	useEffect(() => {
		if (id) {
			socket.auth = { token: `Bearer ${token}` };
			socket.connect();
			socket.emit("getUsersOnline", { userIds: [id] }, (ids) => {
				const onlineId = ids.onlineUserIds?.at(0);
				if (!onlineId) {
					setIsOnline(false);
					return;
				}
				setIsOnline(onlineId.status === "online");
			});
			socket.on("statusUpdate", (data) => {
				setIsOnline(data.status === "online" && data.id === id);
			});
			return () => {
				socket.off("statusUpdate");
			};
		}
	}, []);
	let size = 96;
	if (style?.width && typeof style.width === "number") {
		size = style.width;
	}
	const statusBadgeSize = {
		width: size * 0.35,
		height: size * 0.35,
	};
	return (
		<View style={[styles.avatarContainer, styles.avatar, style]}>
			<Image
				style={[styles.avatar, style]}
				source={
					image
						? { uri: path }
						: require("../../../media/icon/user.png")
				}
				resizeMode="contain"
			/>

			<View
				style={[
					!!id && styles.statusBadge,
					statusBadgeSize,
					isOnline && styles.activeStatusBadge,
				]}
			/>
		</View>
	);
}
