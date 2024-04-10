import { apiSlice } from 'shared/api';
import { Book } from 'shared/types';
export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query<Book[], void>({
      query: () => '/book/get',
      providesTags: (result) => ['Book'],
    }),
    createBook: build.mutation<Book, object>({
      query: (book) => ({
        url: '/book/create',
        method: 'POST',
        body: { ...book },
      }),
      invalidatesTags: ['Book'],
    }),
    editeBook: build.mutation<Book, Book>({
      query: (book) => ({
        url: `/book/edite/${book.id}`,
        method: 'PUT',
        body: { ...book },
      }),
      invalidatesTags: ['Book'],
    }),
    deleteBook: build.mutation<Book, Book>({
      query: (book) => ({
        url: `/book/delete/${book.id}`,
        method: 'POST',
        body: { ...book },
      }),
      invalidatesTags: ['Book'],
    }),
  }),
});
export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useEditeBookMutation,
  useDeleteBookMutation,
} = bookApiSlice;
