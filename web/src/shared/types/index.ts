export type ErrorReponce = {
  data: { messege: string };
  status: number;
};
export interface Book {
  id: number;
  user_id: number;
  name: string;
  year: string;
  genre: string;
  author: string;
  image: string;
}
