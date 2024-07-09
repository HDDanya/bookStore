import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Book } from 'shared/types';
interface BookState {
  books: Book[];
  count: number;
}
const initialState: BookState = {
  books: [],
  count: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
      localStorage.setItem('bookCount', action.payload.toString())
    },
  },
});
export const { setCount } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
export const selectCurrentBooks = (state: { book: { books: Book[] } }) =>
  state.book.books;
export const selectCount = (state: { book: { count: number } }) =>
  state.book.count;
