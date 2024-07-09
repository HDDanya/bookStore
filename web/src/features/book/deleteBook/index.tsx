import * as React from 'react';
import { Button } from 'antd';
import { useDeleteBookMutation } from 'entities/book';
import { Book } from 'shared/types';
import { setCount } from 'entities/book';
import { useAppDispatch } from 'shared/hooks';
export const DeleteBook: React.FC<Book> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const [deleteBook] = useDeleteBookMutation();
  const handleSubmit = async () => {
    try {
      const data = await deleteBook(props).unwrap();
      dispatch(setCount(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={handleSubmit} danger>
      Delete
    </Button>
  );
};
