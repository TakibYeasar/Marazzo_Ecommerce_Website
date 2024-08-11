import { api } from '../../../app/services/server-api';
import { store } from '../../../app/store';
import { domain } from "../../../env";
import {
    setPosts,
    updatePost,
    deletePost,
    setLikedPosts,
    setUserPosts,
} from '../productSlice';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => `${URL}`,
            providesTags: [{ type: 'Post', id: 'LIST' }],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setPosts(result.data));
            },
        }),
        getPosts: builder.query({
            query: () => `${URL}`,
            providesTags: [{ type: 'Post', id: 'LIST' }],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setPosts(result.data));
            },
        }),
        createPost: builder.mutation({
            query: (body) => ({
                url: `${URL}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setPosts([...store.getState().post.posts, result.data]));
            },
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `${URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(deletePost(arg));
            },
        }),
        updatePost: builder.mutation({
            query: ({ _id, ...patch }) => ({
                url: `${URL}/${_id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: [
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
                { type: 'Post', id: 'SEARCH' },
            ],
            async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(updatePost(result.data));
            },
        }),
        getLikedPost: builder.query({
            query: (username) => `${URL}/${username}/liked`,
            providesTags: [
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'USER' },
                { type: 'Post', id: 'LIST' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setLikedPosts(result.data));
            },
        }),
        getUserPosts: builder.query({
            query: (username) => `${URL}/${username}`,
            providesTags: [
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'USER' },
                { type: 'Post', id: 'LIST' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setUserPosts(result.data));
            },
        }),
        likePost: builder.mutation({
            query: (id) => ({
                url: `${URL}/${id}/like`,
                method: 'PUT',
            }),
            invalidatesTags: [
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
                { type: 'Post', id: 'SEARCH' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(updatePost(result.data));
            },
        }),
        rateRecipe: builder.mutation({
            query: (args) => {
                const { recipeId, rating } = args;
                return {
                    url: `/recipe/rate/${recipeId}`,
                    method: "PUT",
                    body: { rating },
                };
            },
            invalidatesTags: ["recipes"],
        }),
        searchPosts: builder.query({
            query: ({ searchTerm }) => `${URL}/search/${searchTerm}`,
            providesTags: [{ type: 'Post', id: 'SEARCH' }],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setPosts(result.data));
            },
        }),
        searchUserPosts: builder.query({
            query: ({ searchTerm, username }) =>
                `${URL}/${username}/search/${searchTerm}`,
            providesTags: [{ type: 'Post', id: 'USER' }],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setUserPosts(result.data));
            },
        }),
    }),
});

export const {
    useGetNotesQuery,
    useCreateNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation,
} = notesApi;
