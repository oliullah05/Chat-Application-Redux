import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
console.log(process.env.REACT_APP_API_URL, 44)
export const apiSlice = createApi({

    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/",
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken
            console.log(token);
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }

    }),
    tagTypes: [],
    endpoints: (builder) => ({

    })
})
