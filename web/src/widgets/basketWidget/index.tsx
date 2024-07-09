import { Alert, Space, Spin } from 'antd';
import { useGetBasketQuery } from 'entities/book';
import { BookSingleCard } from 'entities/book';

export const BasketWidget = () => {
  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBasketQuery();
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
