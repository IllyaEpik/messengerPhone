import { baseApi } from "src/shared/api/baseApi";
import { ILogin, IProfile, IUser } from "../../../shared/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Album, IUpdateAlbum, ICreateAlbum, IDeleteAlbum } from "./api.types";
import { string } from "yup";


export const albumsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createAlbum: builder.mutation<Album, ICreateAlbum>({
            query: (body) => {
                
                return {
                    url: "/albums/",
                    method: "POST",
                    body: {
                        topic:body.topic,
                        title:body.title,
                        year:body.year,
                    }, 
                    headers: {
                        Authorization: `Bearer ${body.token}`,
                    }
                }
            }
        }),
        getAlbums: builder.query<Album[], string>({
            query: (token) => {
                
                
                return {
                    url: "/albums/",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            }
        }),
        updateAlbums: builder.mutation<IProfile, IUpdateAlbum>({
            query: (body) => {
                const formData = new FormData();
                
                if (body.topic) formData.append("topic", body.topic);
                if (body.title) formData.append("title", body.title);
                if (body.year) formData.append("year", String(body.year));
                
                if (body.image) {
                    formData.append("image", {
                        uri: body.image,
                        name: "image.jpg",
                        type: "image/jpeg",
                    } as unknown as Blob);
                }
                return {
                    url: `albums/${body.id}`,
                    method: "PATCH",
                    body: formData, 
                    headers: {
                        Authorization: `Bearer ${body.token}`,
                    }
                }
            }
        }),
        deleteAlbum: builder.mutation<Album, IDeleteAlbum>({
            query: (body) => {
                
                return {
                    url: `/albums/${body.id}`,
                    method: "DELETE",
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
    useUpdateAlbumsMutation,
    useGetAlbumsQuery,
    useCreateAlbumMutation,
    useDeleteAlbumMutation
 } = albumsApi