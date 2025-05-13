import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './Features/BooksSlice'

export const store = configureStore({
    reducer: {
        books: bookReducer
    }
})
export default store;