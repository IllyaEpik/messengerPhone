import { View, Text } from "react-native";
import { ICONS } from "../../../static/icons";
import { IconButton } from "../../IconButton/IconButton";
import { router, usePathname } from "expo-router";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IHeaderProps } from "../types/header";
import { styles } from "../styles/header";
import { CreatePostModal } from "../../../../modules/posts/components/CreatePostModal";
import { useState } from "react";

export default function Header(props: IHeaderProps) {
	const {
		auth,
		isSettingsHidden,
		isCreatePostHidden
	} = props
	const path = usePathname()
	const {logout} = useAuthContext()
	const [visible, setVisible] = useState(false)

	return (
		<View  style={[styles.container, auth && styles.authContainer]}>
		<ICONS.WorldIT></ICONS.WorldIT>
		{!auth && <>
		<View style={styles.nav}>
				<IconButton onPress={() => setVisible(true)}><ICONS.PlusIcon/></IconButton>
				<IconButton onPress={() => router.push("/profile")} variant={path === "/profile" ? "filled" : undefined}>
				<ICONS.SettingsIcon/>
				</IconButton>
				<IconButton onPress={() => {logout();router.push("/(auth)")}}><ICONS.LogoutIcon/></IconButton>
			</View>
			<CreatePostModal visible={visible} onClose={() => setVisible(false)} />
		</>
		}
		</View>
	);
}
