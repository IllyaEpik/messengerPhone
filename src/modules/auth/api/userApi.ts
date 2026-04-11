import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IUser } from "../../../shared/types/user";
import { IRegister, LoginResponse } from "./api.types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation<LoginResponse, IRegister>({
            query: (body) => {
                console.log(body);
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

        login: builder.mutation<LoginResponse, ILogin>({
            query: (body) => ({
                url: "/users/login",
                method: "POST",
                body: {
                    email: body.email,
                    password: body.password
                }
            })
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
    useGetUserQuery
 } = userApi