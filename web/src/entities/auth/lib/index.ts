export interface IUser {
  id: number;
  email: string;
  name: string;
}
export interface AuthResponce {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
