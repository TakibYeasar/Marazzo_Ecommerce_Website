import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import rootReducer from "../features/root/rootSlice";
import productReducer from "../features/products/productSlice";
import shopReducer from "../features/shop/shopSlice";
import articleReducer from "../features/article/articleSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    article: articleReducer,
    root: rootReducer,
    product: productReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});