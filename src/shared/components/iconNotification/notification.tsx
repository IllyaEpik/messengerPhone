import { Image, ImageStyle, View, ViewStyle, Text } from "react-native";
import { styles } from "./notification.style";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { socket } from "@/shared/api/socket/socket";
import { useAuthContext } from "@/modules/auth/context/authContext";

interface IProps {
	children: ReactNode;
	style?: ViewStyle;
	count: number;
}
export function IconNotification(props: IProps) {
	const { style, children, count } = props;
	const { token } = useAuthContext();
	let size = 12 + 3;
	if (style?.width && typeof style.width === "number") {
		size = style.width;
	}
	const statusBadgeSize = {
		width: size,
		height: size,
	};
	return (
		<View style={[styles.avatarContainer, styles.avatar, style]}>
			{children}

			<View
				style={[
					count < 1 && styles.hidden,
					styles.statusBadge,
					statusBadgeSize,
				]}
			>
				<Text style={styles.text}>{count}</Text>
			</View>
		</View>
	);
}
