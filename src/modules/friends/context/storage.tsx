import React, { createContext, ReactNode, useContext, useState } from "react";
import { friendMenuVariant } from "../types/friendMenu";
import { IProfile } from "@/shared/types/user";
// export type FriendMenuVariant = 'friends' | 'recommends' | 'requests';

// export interface FriendUserData {
//   id: number;
//   username: string | null;
//   pseudonym: string;
//   avatar: string;
// }

// Структура нашего общего состояния
export interface FriendsExludeState {
	main: number[];
	recommend: number[];
	requests: number[];
	all: number[];
}
export interface FriendsApperState {
	main: IProfile[];
	recommend: IProfile[];
	requests: IProfile[];
	all: IProfile[];
}
interface ProfileId {
	id: number;
}
interface FriendsContextType {
	exlude: FriendsExludeState;
	apper: FriendsApperState;
	moveUser: (
		user: IProfile | ProfileId,
		from: friendMenuVariant,
		to: friendMenuVariant,
	) => void;
	clear: () => void;
}

const initialFriendsExludeState: FriendsExludeState = {
	main: [],
	recommend: [],
	requests: [],
	all: [],
};
const initialFriendsApperState: FriendsApperState = {
	main: [],
	recommend: [],
	requests: [],
	all: [],
};

// Хук для удобного использования в компонентах
export const useFriends = () => {
	const context = useContext(FriendsContext);
	if (!context)
		throw new Error("useFriends must be used within a FriendsProvider");
	return context;
};

const FriendsContext = createContext<FriendsContextType | undefined>(undefined);

export function FriendsProvider(props: { children: ReactNode }) {
	const { children } = props;
	// Инициализируем стейт списками id и профилей
	const [exlude, setExlude] = useState<FriendsExludeState>(
		initialFriendsExludeState,
	);
	const [apper, setApper] = useState<FriendsApperState>(
		initialFriendsApperState,
	);

	function moveUser(
		friend: IProfile | ProfileId,
		from: friendMenuVariant,
		to: friendMenuVariant,
	) {
		if (from === "main" || from === to) return;

		setExlude((prev) => ({
			...prev,
			[from]: prev[from].includes(friend.id)
				? prev[from]
				: [...prev[from], friend.id],
		}));

		if ("avatar" in friend && to !== "main") {
			setApper((prev) => ({
				...prev,
				[to]: prev[to].some((item) => item.id === friend.id)
					? prev[to]
					: [...prev[to], friend],
			}));
		}
	}
	function clear() {
		setExlude(initialFriendsExludeState);
		setApper(initialFriendsApperState);
	}

	//  style={{flex:1}}
	return (
		<FriendsContext.Provider value={{ exlude, apper, moveUser, clear }}>
			{children}
		</FriendsContext.Provider>
	);
}
