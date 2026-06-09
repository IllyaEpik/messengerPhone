import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "api",
	tagTypes: ["ChatList"],
	baseQuery: fetchBaseQuery(
		// "http://127.0.0.1:8000"

		{
			baseUrl: "http://10.0.2.2:8000",

			prepareHeaders: (headers) => {
				// const token = localStorage.getItem("token");
				// if (token) {
				//     headers.set("Authorization", `Bearer ${token}`);
				// }
				headers.set("Accept", "application/json");
				return headers;
			},
		},
	),
	endpoints: () => ({}),
});
