import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {},
});

export const bookReducer = bookSlice.reducer;
export const selectCurrentBooks = (state: { book: { books: Book[] } }) =>
  state.book.books;
