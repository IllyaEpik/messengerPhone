import { IUser } from "@/shared/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserQuery } from "../api/userApi";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface IAuthContext {
    user: IUser | null;
    setToken: (token: string) => void;
    logout: () => void 
    token:string
}

interface AuthProviderProps {
    children: React.ReactNode;
}
    
const AuthContext = createContext<IAuthContext>({user: null, setToken: () => {}, logout: () => {}, token:""})

export function useAuthContext() {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error(
            "UseAuthContext must be used within AuthProvider"
        );
    return ctx;
}

export function AuthProvider(props: AuthProviderProps) {
    const { children } = props;
    const [token, setToken] = useState<string>("")
    const [user, setUser] = useState<IUser | null>(null)
    const {data} = useGetUserQuery(token, { skip: !token, pollingInterval: 5000 });
    
    
    useEffect(() => { 
        AsyncStorage.getItem("token").then((token) => {
            if (token) {
                console.log("from storage",token)
                setToken(token)
            }
        })
    }, [])

    useEffect(() => {
        if (data) {
            setUser(data)
        }
    }, [data])
    
    function logout() {
        setToken("")
        AsyncStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user: data || null, setToken, logout, token }}>
            {children}
        </AuthContext.Provider>
    )
}
