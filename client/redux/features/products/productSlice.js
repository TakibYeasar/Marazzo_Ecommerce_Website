import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        products: [],
        teamProducts: [],
        likedProducts: [],
        userProducts: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        updateroducts: (state, action) => {
            const { _id, text } = action.payload;
            const index = state.products.findIndex((product) => product._id === _id);
            if (index >= 0) {
                state.products[index] = { ...state.products[index], text };
            }
        },
        deleteroducts: (state, action) => {
            const index = state.products.findIndex(
                (product) => product._id === action.payload
            );
            if (index >= 0) {
                state.products.splice(index, 1);
            }
        },
        setLikedProducts: (state, action) => {
            state.likedProducts = action.payload;
        },
        setUserProducts: (state, action) => {
            state.userProducts = action.payload;
        },
    },
});

export const { setProduct, setNProduct, updateProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;