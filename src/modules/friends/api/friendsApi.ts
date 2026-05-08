import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IProfile, IUser } from "../../../shared/types/user";
import type { gottenFriends } from "./api.types";


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
        getFriendsData: builder.query<gottenFriends, string>({
            query: (token) => ({
                url: "/users/friends",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }),
            
        })
    }),
    overrideExisting: false
})


export const { 
    useSendRequestMutation,
    useConfirmRequestMutation,
    useGetFriendsDataQuery
 } = userApi