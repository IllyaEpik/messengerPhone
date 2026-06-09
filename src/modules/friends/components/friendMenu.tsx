import { View, Text, Pressable } from "react-native";
import { friendMenuProps } from "../types/friendMenu";
import { styles } from "../styles/friendMenu.styles";

export function FriendMenu(props: friendMenuProps) {
	const { variant, setVariant } = props;
	return (
		<View style={styles.menu}>
			<Pressable onPress={() => setVariant("main")}>
				<Text
					style={[
						styles.text,
						variant === "main" ? styles.active : styles.deactive,
					]}
				>
					Головна
				</Text>
			</Pressable>
			<Pressable onPress={() => setVariant("requests")}>
				<Text
					style={[
						styles.text,
						variant === "requests"
							? styles.active
							: styles.deactive,
					]}
				>
					Запити
				</Text>
			</Pressable>

			<Pressable onPress={() => setVariant("recommend")}>
				<Text
					style={[
						styles.text,
						variant === "recommend"
							? styles.active
							: styles.deactive,
					]}
				>
					Рекомендації
				</Text>
			</Pressable>
			<Pressable onPress={() => setVariant("all")}>
				<Text
					style={[
						styles.text,
						variant === "all" ? styles.active : styles.deactive,
					]}
				>
					Всі друзі
				</Text>
			</Pressable>
		</View>
	);
}
