import { createContext, useContext, useEffect, useState } from "react";
import { useGetFriendsDataQuery } from "@/modules/friends/api/friendsApi";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IProfile } from "@/shared/types/user";

interface IContactsContext {
	contacts: IProfile[];
}

interface ContactsProviderProps {
	children: React.ReactNode;
}

const ContactContext = createContext<IContactsContext>({ contacts: [] });

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
		{ skip: !user?.id || !token },
	);
	const contacts = friends.data?.friends;
	if (!contacts) {
		return null;
	}

	return (
		<ContactContext.Provider value={{ contacts: contacts }}>
			{children}
		</ContactContext.Provider>
	);
}
