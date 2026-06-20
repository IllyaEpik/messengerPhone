import { baseApi } from "src/shared/api/baseApi";
import {
	IChat,
	IChatContactDetailed,
	IChatContactGetPayload,
	IChatCreate,
	IChatGetPayload,
	IChatUpdate,
	ICreateImageMessagePayload,
	ICreateMessagePayload,
	IGetCurrentChat,
	IMessage,
	IMessageGetPayload,
} from "./api.types";
// tagTypes: ['ChatList'],

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getChat: builder.mutation<IChat, IChatContactGetPayload>({
			query: (payload) => {
				return {
					url: `/chats/contact/${payload.friendId}`,
					method: "GET",
					headers: {
						Authorization: `Bearer ${payload.token}`,
					},
				};
			},
			invalidatesTags: [{ type: "ChatList", id: "LIST" }],
		}),
		getChats: builder.query<IChat[], IChatGetPayload>({
			query: (payload) => ({
				url: `/chats/${payload.userId}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${payload.token}`,
				},
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: "ChatList" as const,
								id,
							})),
							{ type: "ChatList", id: "LIST" },
						]
					: [{ type: "ChatList", id: "LIST" }],
		}),
		getMessages: builder.query<IMessage[], IMessageGetPayload>({
			query: (payload) => ({
				url: `/messages/${payload.chatId}?skip=${0}&take=${40}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${payload.token}`,
				},
			}),
		}),
		createChat: builder.mutation<IChat, IChatCreate>({
			query: ({ token, ...body }) => {
				const formData = new FormData();
				formData.append("name", body.name || "no name");
				formData.append("Isgroup", String(body.Isgroup || true));
				if (body.users) {
					body.users.forEach((user) => {
						formData.append("users", String(user));
					});
				}
				if (body.avatar) {
					formData.append("avatar", {
						uri: body.avatar,
						name: `image.jpg`,
						type: "image/jpeg",
					} as unknown as Blob);
				}

				return {
					url: `/chats/`,
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: formData,
				};
			},
			invalidatesTags: [{ type: "ChatList", id: "LIST" }],
		}),
		deleteChat: builder.mutation<IChat, IMessageGetPayload>({
			query: ({ token, chatId }) => {
				return {
					url: `/chats/${chatId}`,
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
			invalidatesTags: [{ type: "ChatList", id: "LIST" }],
		}),
		getCurrentChat: builder.query<IChatContactDetailed, IGetCurrentChat>({
			query: (payload) => ({
				url: `/chats/chat/${payload.chatId}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${payload.token}`,
				},
			}),
			providesTags: (result, error, chatId) => [{ type: "CurrentChat", id: "SINGLE" }]
			//  providesTags: (result) =>
			//     result
			//     ? [{ type: 'ChatList', id: result.id }, { type: 'ChatList', id: 'LIST' }]
			//     : [{ type: 'ChatList', id: 'LIST' }],
		}),
		updateChat: builder.mutation<IChat, IChatUpdate>({
			query: ({ token, id, ...body }) => {
				const formData = new FormData();
				formData.append("name", body.name || "no name");
				formData.append("Isgroup", String(body.Isgroup || true));
				if (body.users) {
					body.users.forEach((user) => {
						formData.append("users", String(user));
					});
				}
				if (body.avatar) {
					formData.append("avatar", {
						uri: body.avatar,
						name: `image.jpg`,
						type: "image/jpeg",
					} as unknown as Blob);
				}
				return {
					url: `/chats/${id}`,
					method: "PATCH",
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: formData,
				};
				3;
			},
			invalidatesTags: [{type: "CurrentChat", id:"SINGLE"},{ type: "ChatList", id: "LIST" }],
		}),
		sendMessage: builder.mutation<IMessage, ICreateImageMessagePayload>({
			query: (body) => {
				const formData = new FormData();
				formData.append("text", body.text);

				body.images.forEach((image) => {
					formData.append("images", {
						uri: image,
						name: `image.jpg`,
						type: "image/jpeg",
					} as unknown as Blob);
				});
				return {
					url: `/messages/${body.chatId}`,
					method: "POST",
					headers: {
						Authorization: `Bearer ${body.token}`,
					},
					body: formData,
				};
			},
			invalidatesTags: [{ type: "ChatList", id: "LIST" }],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetChatMutation,
	useGetChatsQuery,
	useGetMessagesQuery,
	useCreateChatMutation,
	useGetCurrentChatQuery,
	useDeleteChatMutation,
	useUpdateChatMutation,
	useSendMessageMutation,
} = userApi;
