import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "../api/addProduct";

const initialState = {
  products: [],
  status: 'idle',
  error: null
};

export const createProduct = createAsyncThunk(
  "pro/create",
  async ({productData,successCB,errorCB}) => {
    console.log("my succescb",successCB);
   
    const response = await postData(productData,successCB,errorCB)
    return response?.data
  }
);

const addSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.push(action.payload); // Assuming you add the new product to the state
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default addSlice.reducer;
