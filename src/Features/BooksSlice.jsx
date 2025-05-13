import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, title: 'Learn JS', author: 'Maxwell' },
        { id: 2, title: 'Learn CSS', author: 'Dowain' },
        { id: 3, title: 'Learn React', author: 'Kelly' },
    ]
}
const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, author, title } = action.payload
            const isbookExist = state.books.find(book => book.id === id);
            if (isbookExist) {
                isbookExist.title = title;
                isbookExist.author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);

        }
    }

})
export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;