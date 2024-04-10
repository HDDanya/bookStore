import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser, AuthResponce } from '../lib';
interface AuthState {
  user: IUser;
  token: string;
}

const initialState: AuthState = {
  user: {} as IUser,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<AuthResponce>) {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut(state) {
      state.user = {} as IUser;
      state.token = '';
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state: { auth: { user: IUser } }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: { token: string } }) =>
  state.auth.token;
