import * as React from 'react';
import { Button } from 'antd';
import { useDeleteBookMutation } from 'entities/book';
import { Book } from 'shared/types';

export const DeleteBook: React.FC<Book> = ({ ...props }) => {
  const [deleteBook] = useDeleteBookMutation();
  const handleSubmit = async () => {
    try {
      await deleteBook(props).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={handleSubmit} danger>
      Удалить
    </Button>
  );
};
