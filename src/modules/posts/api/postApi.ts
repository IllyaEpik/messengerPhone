import { baseApi } from "@/shared/api/baseApi"
import { ICreatePost, IGetPosts, IPost } from "./api.types"


export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation<IPost, ICreatePost>({
            query: (body) => {
                const formData = new FormData();
                formData.append("title",body.title)
                formData.append("content",body.content)
                if (body.tags) formData.append("tags",body.tags.join(" "))
                if (body.links) formData.append("links",body.links.join(" "))
                if (body.images) {
                    body.images.forEach((image) => {
                        formData.append("images", {
                            uri: image,
                            name: `image.jpg`,
                            type: "image/jpeg",
                        } as unknown as Blob); 
                    });
                }
                return {
                    url: "/posts/",
                    method: "POST",
                    body: formData,
                    headers: {
                    Authorization: `Bearer ${body.token}`,
                }
                }
            }
        }),
        getPosts: builder.query<IPost[], IGetPosts>({
            query: (data) =>({
                url: `/posts${data.isMine ? "/me/": `?skip=${data.skip}`}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${data.token}`, 
                }
            })
        }),
        editPost: builder.mutation<IPost, ICreatePost & {id: number}>({
            query: (body) => {
                const formData = new FormData();
                formData.append("title",body.title)
                formData.append("content",body.content)
                if (body.tags) formData.append("tags",body.tags.join(" "))
                if (body.links) formData.append("links",body.links.join(" "))
                if (body.images) {
                    body.images.forEach((image) => {
                        formData.append("images", {
                            uri: image,
                            name: `image.jpg`,
                            type: "image/jpeg",
                        } as unknown as Blob); 
                    });
                }
                return {
                    url: `/posts/${body.id}`,
                    method: "PATCH",
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${body.token}`,
                    }
                }
            }
        }),
        deletePost: builder.mutation<void, {id: number, token: string}>({
            query: ({id, token}) => ({
                url: `/posts/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        })

    }),
    overrideExisting: false
})

export const {
    useCreatePostMutation,
    useGetPostsQuery,
    // useGetMyPostsQuery
    useEditPostMutation,
    useDeletePostMutation
} = postApi