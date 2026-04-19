import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IProfile, IUser } from "../../../shared/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { IUpdateProfile } from "./api.types";


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation<IProfile, IUpdateProfile>({
            query: (body) => {
                const formData = new FormData();
                
                // Conditionally append text fields only if they exist
                if (body.firstName) formData.append("firstName", body.firstName);
                if (body.lastName) formData.append("lastName", body.lastName);
                if (body.nickName) formData.append("nickName", body.nickName);
                if (body.username) formData.append("username", body.username);
                
                // Append avatar as a file (React Native style) only if present
                if (body.avatar) {
                    formData.append("avatar", {
                        uri: body.avatar,
                        name: "avatar.jpg",
                        type: "image/jpeg",
                    } as unknown as Blob);
                }
                
                return {
                    url: "/users/",
                    method: "PATCH",
                    body: formData, 
                    headers: {
                        Authorization: `Bearer ${body.token}`,
                    }
                }
            }
        })
    }),
    overrideExisting: false
})


export const { 
    useUpdateProfileMutation
 } = userApi