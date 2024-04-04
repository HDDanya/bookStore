import * as React from 'react';
import { Alert, Space, Spin } from 'antd';
import { useGetBooksQuery } from 'entities/book';
import { BookSingleCard } from 'entities/book';

export const BookCards = () => {
  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBooksQuery();

  let content;
  if (isLoading) {
    content = <Spin />;
  } else if (isSuccess) {
    content = (
      <>
        <Space wrap style={{ justifyContent: 'center' }}>
          {books?.map((book) => (
            <BookSingleCard key={book.id} {...book} />
          ))}
        </Space>
      </>
    );
  } else if (isError) {
    content = <Alert message={JSON.stringify(error)} type="error" />;
  }
  return <> {content}</>;
};
