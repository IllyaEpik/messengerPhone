import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IUser } from "../../../shared/types/user";
import { IChat, IChatContactGetPayload, IChatGetPayload, IMessage, IMessageGetPayload } from "./api.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../../auth/context/authContext";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getChat: builder.mutation<IChat, IChatContactGetPayload>({
            query: (payload) => {
                return {
                    url: `/chats/contact/${payload.friendId}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${payload.token}`,
                    }
                }
            }
        }),
        getChats: builder.query<IChat[], IChatGetPayload>({
            query: (payload) => ({
                url: `/chats/${payload.userId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${payload.token}`,
                }
            })
        }),
        getMessages: builder.query<IMessage[], IMessageGetPayload>({
            query: (payload) => ({
                url: `/messages/${payload.chatId}?skip=${0}&take=${40}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${payload.token}`,
                }
            })
        }),
    }),
    overrideExisting: false
})


export const { 
    useGetChatMutation,
    useGetChatsQuery,
    useGetMessagesQuery
 } = userApi