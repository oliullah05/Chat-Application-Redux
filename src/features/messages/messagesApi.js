import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (id) =>
                `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
        }),
        getMoreMessages: builder.query({
            query: ({ id, page }) =>
                `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=${page}&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,

            async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
                try {
                    const conversations = await queryFulfilled;

                    if (conversations?.data?.length > 0) {
                        // update conversation cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getMessages",
                                id.toString(),
                                (draft) => {
                                    // console.log("under tnhe draft");
                                    // console.log(JSON.stringify(conversations,8888));
                                    return [
                                        ...draft,
                                        ...conversations.data,
                                    ]


                                }
                            )
                        );
                        // update messages cache pessimistically end
                    }
                } catch (err) { }
            },
        }),
        addMessage: builder.mutation({
            query: (data) => ({
                url: "/messages",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetMessagesQuery, useAddMessageMutation, useGetMoreMessagesQuery } = messagesApi;
