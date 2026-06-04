import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IUser } from "../../../shared/types/user";
import { IChat, IChatContactDetailed, IChatContactGetPayload, IChatCreate, IChatGetPayload, IChatUpdate, IGetCurrentChat, IMessage, IMessageGetPayload } from "./api.types";
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
        createChat: builder.mutation<IChat, IChatCreate>({
            query: ({token, ...body}) => {
                return {
                    url: `/chats/`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: body
                }
            }
        }),
        deleteChat: builder.mutation<IChat, IMessageGetPayload>({
            query: ({token, chatId}) => {
                return {
                    url: `/chats/${chatId}`,
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            }
        }),
        getCurrentChat: builder.query<IChatContactDetailed, IGetCurrentChat>({
            query: (payload) => ({
                url: `/chats/chat/${payload.chatId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${payload.token}`,
                }
            })
        }),
        updateChat: builder.mutation<IChat, IChatUpdate>({
            query: ({token, id, ...body}) => {
                return {
                    url: `/chats/${id}`,
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: body
                }
            }
        }),
    }),
    overrideExisting: false
})


export const { 
    useGetChatMutation,
    useGetChatsQuery,
    useGetMessagesQuery,
    useCreateChatMutation,
    useGetCurrentChatQuery,
    useDeleteChatMutation,
    useUpdateChatMutation
 } = userApi