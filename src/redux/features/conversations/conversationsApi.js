import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      getConversation:builder.query({
        query:(email)=>`/conversation?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATION_PER_PAGE}`
      })
    })
})

export const  {useGetConversationQuery}=conversationApi