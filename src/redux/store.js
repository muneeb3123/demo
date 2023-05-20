import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice.js';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
export default store;
