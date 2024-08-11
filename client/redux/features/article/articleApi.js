import { apiSlice } from "../../redux/apiSlice";
import { setCategories, setArticles } from './articleSlice';

export const articleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getArticlesCat: builder.query({
            query: () => 'core/articles-cat/',
            method: "GET",
            body,
            providesTags: ['article'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCategories(data));
                } catch (error) {
                    console.error(error);
                }
            },
        }),
        getSingleCategory: builder.query({
            query: (catId) => `core/category-articles/${catId}`,
            method: "GET",
            body,
        }),
        getAllArticles: builder.query({
            query: () => 'core/all-articles/',
            method: "GET",
            body,
            providesTags: ['article'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setArticles(data));
                } catch (error) {
                    console.error(error);
                }
            },
        }),
        getSingleArticle: builder.query({
            query: (articleId) => `core/single-article/${articleId}`,
            method: "GET",
            body,
        }),
        commentArticle: builder.mutation({
            query: ({ articleId, commentData }) => ({
                url: `core/single-article/${articleId}/comment-article/`,
                method: 'POST',
                body: commentData,
            }),
        }),
        updateComment: builder.mutation({
            query: ({ articleId, commentId, commentData }) => ({
                url: `core/single-article/${articleId}/comment-article/${commentId}/update-comment/`,
                method: 'PUT',
                body: commentData,
            }),
        }),
        deleteComment: builder.mutation({
            query: ({ articleId, commentId }) => ({
                url: `core/single-article/${articleId}/comment-article/${commentId}/delete-comment/`,
                method: 'DELETE',
            }),
        }),
        replayCommentArticle: builder.mutation({
            query: ({ articleId, commentId, commentData }) => ({
                url: `core/single-article/${articleId}/comment-article/${commentId}/replay-comment/`,
                method: 'POST',
                body: commentData,
            }),
        }),
        updateReplayComment: builder.mutation({
            query: ({ articleId, commentId, repCmtId, commentData }) => ({
                url: `core/single-article/${articleId}/comment-article/${commentId}/replay-comment/${repCmtId}/update-comment/`,
                method: 'PUT',
                body: commentData,
            }),
        }),
        deleteReplayComment: builder.mutation({
            query: ({ articleId, commentId, repCmtId }) => ({
                url: `core/single-article/${articleId}/comment-article/${commentId}/replay-comment/${repCmtId}/delete-comment/`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetArticlesCatQuery,
    useGetSingleCategoryQuery,
    useGetAllArticlesQuery,
    useGetSingleArticleQuery,
    useCommentArticleMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useReplayCommentArticleMutation,
    useUpdateReplayCommentMutation,
    useDeleteReplayCommentMutation,
} = articleApi;
