import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProduct } from "../api/products"



const initialState = {
    products : [],
    status :'idle',
    error : null
};

export const getProducts = createAsyncThunk(
    'fetchProducts',
    fetchProduct
);  


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default productsSlice.reducer;