import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IProfile, IUser } from "../../../shared/types/user";
import type { friendInfoOutput, gottenFriends, pagination } from "./api.types";


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendRequest: builder.mutation<void, { profileId: number, token: string}>({
            query: ({ profileId, token }) => ({
                url: `/users/send/${profileId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }),
        confirmRequest: builder.mutation<void, { fromUserId: number, token: string}>({
            query: ({ fromUserId, token }) => ({
                url: `/users/confirm/${fromUserId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }),
        getFriendsData: builder.query<gottenFriends, {token:string, pagination:pagination}>({
            query: ({token}) => ({
                url: "/users/friends",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }),
        }),
        removeUser: builder.mutation<void, { userid: number, token: string}>({
            query: ({ userid, token }) => ({
                url: `/users/delete-friend/${userid}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }),
        blockRequest: builder.mutation<void, { userid: number, token: string}>({
            query: ({ userid, token }) => ({
                url: `/users/block/${userid}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }),
        getFriend: builder.query<friendInfoOutput | null, { userid: number, token: string}>({
            query: ({ userid, token }) => ({
                url: `/users/friend/${userid}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }),
    }),
    overrideExisting: false
})


export const { 
    useSendRequestMutation,
    useConfirmRequestMutation,
    useGetFriendsDataQuery,
    useRemoveUserMutation,
    useBlockRequestMutation,
    useGetFriendQuery
 } = userApi