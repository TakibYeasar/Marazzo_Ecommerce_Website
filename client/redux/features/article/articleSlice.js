import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    articles: [],
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
    },
});
export const selectAllCategories = (state) => state.article.categories;
export const selectAllArticles = (state) => state.article.articles;
export default articleSlice.reducer;
