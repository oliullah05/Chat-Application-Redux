import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
console.log(process.env.REACT_APP_API_URL,44)
export const apiSlice = createApi({
    
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000/"}),
    tagTypes:[],
    endpoints:(builder)=>({

    })
})
