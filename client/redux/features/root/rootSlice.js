import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        contactinfo: [],
        banners: [],
        featured: [],
    },
    reducers: {
        setContactinfo: (state, action) => {
            state.contactinfo = action.payload;
        },
        setBanners: (state, action) => {
            state.banners = action.payload;
        },
        setFeatured: (state, action) => {
            state.featured = action.payload;
        },
    },
});

export const { setContactinfo, setBanners, setFeatured } = rootSlice.actions;
export default rootSlice.reducer;

export const selectContactinfo = (state) => state.root.contactinfo;
export const selectAllBanners = (state) => state.root.banners;
export const selectAllFeatured = (state) => state.root.featured;
