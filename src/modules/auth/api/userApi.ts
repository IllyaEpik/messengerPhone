import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IUser } from "../../../shared/types/user";
import { IProfile, IRegister, LoginResponse } from "./api.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../context/authContext";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation<LoginResponse, IRegister>({
            query: (body) => {
                return {
                    url: "/users/registration",
                    method: "POST",
                    body: {
                        email: body.email,
                        password: body.password
                    }
                }
            }
        }),
        profile: builder.mutation<LoginResponse, IProfile>({
            query: (body) => {
                return {
                    url: "/users/profile",
                    method: "POST",
                    body: {
                        nickname:body.nickname,
                        username:body.username,
                    },
                    headers: {
                        Authorization: `Bearer ${body.token}`,
                    }
                }
            }
        }),
        RegistrationSecondPhase: builder.mutation<LoginResponse, number>({
            query: (code) => {
                return {
                    url: `/users/registrationSecond/${code}`,
                    method: "GET"
                }
            },
            async onCacheEntryAdded(arg, api) {
				const { data } = await api.cacheDataLoaded;
				await AsyncStorage.setItem("token", data.token);
                useAuthContext().setToken(data.token);
			}
        }),

        login: builder.mutation<LoginResponse, ILogin>({
            query: (body) => ({
                url: "/users/login",
                method: "POST",
                body: {
                    email: body.email,
                    password: body.password
                }
            }),
            async onCacheEntryAdded(arg, api) {
                const { data } = await api.cacheDataLoaded;
				await AsyncStorage.setItem("token", data.token);
                useAuthContext().setToken(data.token);
			}
        }),
        getUser: builder.query<IUser, string>({
            query: (token) => ({
                url: "/users/me",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        })
    }),
    overrideExisting: false
})


export const { 
    useRegistrationMutation,
    useLoginMutation,
    useGetUserQuery,
    useRegistrationSecondPhaseMutation,
    useProfileMutation
 } = userApi