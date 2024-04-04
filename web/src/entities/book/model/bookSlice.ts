import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Book } from 'shared/types';
interface BookState {
  books: Book[];
}
const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<Book[]>) {
      // state.books = action.payload;
    },
    addBook(state, action: PayloadAction<Book>) {
      // state.books.push(action.payload);
    },
    editeBook(state, action: PayloadAction<Book>) {
      // eslint-disable-next-line array-callback-return
      // state.books.map((el) => {
      //   if (el.id !== action.payload.id) {
      //     return el;
      //   }
      //   return {
      //     ...el,
      //     completed:!el.completed
      //   }
      // });
    },
  },
});

export const { setCredentials, addBook, editeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
export const selectCurrentBooks = (state: { book: { books: Book[] } }) =>
  state.book.books;
