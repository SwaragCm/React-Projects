import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './product';
import addReducer from './productAdd'

export const store = configureStore({
    reducer: {
      products: productsReducer,
      productAdd: addReducer
    },
  })

