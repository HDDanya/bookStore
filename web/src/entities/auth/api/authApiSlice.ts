import { apiSlice } from 'shared/api';
import { AuthResponce } from '../lib';
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    login: build.mutation<AuthResponce, object>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    registration: build.mutation<AuthResponce, object>({
      query: (credentials) => ({
        url: '/registration',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useLogoutMutation, useLoginMutation, useRegistrationMutation } =
  authApiSlice;
