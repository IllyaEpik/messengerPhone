import { Redirect, router, Tabs } from "expo-router";

import Header from "@/shared/components/header/ui/header";
import Footer from "@/shared/components/footer/ui/footer";
import { HouseIcon } from "@/shared/static/icons/_icons/house";
import { ChatIcon } from "@/shared/static/icons/_icons/chat";
import { PeopleIcon } from "@/shared/static/icons/_icons/people";
import { PublicIcon } from "@/shared/static/icons/_icons/publics";
import FooterTab from "@/shared/components/footer/ui/footerTab";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { CreateProfileModal } from "@/modules/auth/components/profileModal";
import { PaperProvider } from "react-native-paper";
import {
	ContactsProvider,
	useContactsContext,
} from "@/modules/chat/context/contactsContext";
import { useEffect, useState } from "react";
import { socket } from "@/shared/api/socket/socket";
import { IconNotification } from "@/shared/components/iconNotification/notification";
//   const Tab = createBottomTabNavigator()
export default function Layout() {
	const [localUnreadCount, setLocalUnreadCount] = useState(0);
	const { chats, requests, isLoadingChats } = useContactsContext();
	const { token } = useAuthContext();
	useEffect(() => {
		if (!chats) return;
		setLocalUnreadCount(
			chats
				.map((chat) => chat.unreadMessages)
				.reduce((messages, prev) => prev + messages, 0),
		);
		socket.auth = { token: `Bearer ${token}` };
		socket.connect();
		socket.on("updateChat", (message) => {
			setLocalUnreadCount((prev) => prev + 1);
		});
		socket.on("messageRead", (data) => {
			setLocalUnreadCount((prev) => prev - 1);
		});
		return () => {
			socket.off("updateChat");
			socket.off("messageRead");
		};
	}, [isLoadingChats]);
	return (
		<PaperProvider>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#070A1C",
					headerShown: false,
					tabBarInactiveTintColor: "#070A1C",
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Головна",

						headerShown: true,
						header: () => <Header />,
						tabBarIcon: ({ focused }) => (
							<FooterTab
								selected={focused}
								icon={<HouseIcon />}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="publics"
					options={{
						title: "Мої публікації",
						tabBarIcon: ({ focused }) => (
							<FooterTab
								selected={focused}
								icon={<PublicIcon />}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="friends"
					options={{
						title: "Друзі",
						tabBarIcon: ({ focused }) => (
							<FooterTab
								selected={focused}
								icon={
								<IconNotification count={ requests?.length || 0}>
									<PeopleIcon />
								</IconNotification>
								}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="chat"
					options={{
						title: "Чати",
						tabBarIcon: ({ focused }) => (
							<FooterTab
								selected={focused}
								icon={
									<IconNotification count={localUnreadCount}>
										<ChatIcon />
									</IconNotification>
								}
							/>
						),
					}}
				/>

				{/* <Tabs.Screen 
      name="(auth)" 
      options={{
        href: null
      }} 
    /> */}
				<Tabs.Screen
					name="profile"
					options={{
						href: null,
					}}
				/>
			</Tabs>
		</PaperProvider>
	);
}
