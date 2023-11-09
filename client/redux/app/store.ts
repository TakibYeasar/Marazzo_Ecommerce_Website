import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../api/apiSlice';
import { authApi } from '../features/auth/api/auth';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
