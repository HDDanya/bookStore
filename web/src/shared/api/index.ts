import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'app/store';
import baseQueryWithReauth from 'entities/auth/api/apiSlice';
export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}`,
  credentials: 'include',
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Book'],
  endpoints: () => ({}),
});
