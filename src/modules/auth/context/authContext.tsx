import { IUser } from "@/shared/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserQuery } from "../api/userApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { boolean } from "yup";

interface IAuthContext {
	user: IUser | null;
	setToken: (token: string) => void;
	logout: () => void;
	token: string;
	isLoading: boolean
}

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({
	user: null,
	setToken: () => {},
	logout: () => {},
	token: "",
	isLoading: false
});

export function useAuthContext() {
	const ctx = useContext(AuthContext);
	if (!ctx)
		throw new Error("UseAuthContext must be used within AuthProvider");
	return ctx;
}

export function AuthProvider(props: AuthProviderProps) {
	const { children } = props;
	const [token, setToken] = useState<string>("");
	const [isInitialized, setIsInitialized] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);
	const { data, isLoading } = useGetUserQuery(token, {
		skip: !token,
		pollingInterval: 500000,
	});
	useEffect(() => {
		AsyncStorage.getItem("token")
			.then((token) => {
				if (token) {
					setToken(token);
				}
			})
			.finally(() => {
				setIsInitialized(true);
			});
	}, []);

	useEffect(() => {
		if (data) {
			setUser(data);
		}
	}, [data]);

	function logout() {
		setToken("");
		setUser(null);
		AsyncStorage.removeItem("token");
	}

	if (!isInitialized) {
		return null;
	}

	return (
		<AuthContext.Provider value={{ user, setToken, logout, token, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}
