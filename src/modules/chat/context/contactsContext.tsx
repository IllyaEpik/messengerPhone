import { createContext, useContext, useEffect, useState } from "react";
import { useGetFriendsDataQuery } from "@/modules/friends/api/friendsApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IProfile } from "@/shared/types/user";
import { useGetChatsQuery } from "../api/chatApi";
import { IChat } from "../api/api.types";

interface IContactsContext {
	contacts?: IProfile[];
	requests?: IProfile[];
	isLoadingChats: boolean;
	chats?: IChat[];
}

interface ContactsProviderProps {
	children: React.ReactNode;
}

const ContactContext = createContext<IContactsContext>({
	contacts: [],
	isLoadingChats: false,
	chats: [],
});

export function useContactsContext() {
	const ctx = useContext(ContactContext);
	if (!ctx)
		throw new Error(
			"UseContactsContext must be used within ContactsProvider",
		);
	return ctx;
}

export function ContactsProvider(props: ContactsProviderProps) {
	const { children } = props;
	const { token, user } = useAuthContext();

	const friends = useGetFriendsDataQuery(
		{ token: token, pagination: { recommends: 0, requests: 0 } },
		{ skip: !user?.id || !token, pollingInterval: 500000 },
	);
	const { data: chats, isLoading: isLoadingChats } = useGetChatsQuery(
		{ userId: user?.id!, token: token },
		{ skip: !user?.id || !token, pollingInterval: 500000 },
	);
	const contacts = friends.data?.friends;
	const requests = friends.data?.friendRequests; 
	console.log(requests?.length, 111111111111111111111111111)
	// if (!contacts) {
	// 	return null;
	// }
	console.info("yoyoyoyoyoyoyoyo", children);

	return (
		<ContactContext.Provider
			value={{
				contacts: contacts,
				chats,
				isLoadingChats,
				requests
			}}
		>
			{children}
		</ContactContext.Provider>
	);
}
