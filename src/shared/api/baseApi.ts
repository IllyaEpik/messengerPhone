import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        { baseUrl: "http://192.168.0.146:8000",
            prepareHeaders: (headers) => {
                // const token = localStorage.getItem("token");
                // if (token) {
                //     headers.set("Authorization", `Bearer ${token}`);
                // }
                headers.set('Accept', 'application/json');
                return headers;
            }



        }),
    endpoints: () => ({})
})