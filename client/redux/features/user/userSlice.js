import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user') || 'null');

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user,
        token: user ? user.token : null,
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = null;
            localStorage.clear();
        },
    },
});

export const selectCurrentUser = (state) => state.auth.user;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;