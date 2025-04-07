// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import mensReducer from './mensSlice';
import womensReducer from './womensSlice'; 

const store = configureStore({
  reducer: {
    products: productsReducer,
    mens: mensReducer,
    womens: womensReducer, 
  },
});

export default store;