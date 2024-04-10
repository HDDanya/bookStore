import * as React from 'react';
import { Card, Space } from 'antd';
import { Book } from 'shared/types';
import { selectCurrentUser } from 'entities/auth';
import { useAppSelector } from 'shared/hooks';
import { buttonsContext } from 'widgets/bookWidget';
export const BookSingleCard: React.FC<Book> = ({
  id,
  user_id,
  name,
  year,
  genre,
  author,
  image,
}) => {
  const book = { id, user_id, name, year, genre, author, image };
  const Edit = React.useContext(buttonsContext)?.[0];
  const Delete = React.useContext(buttonsContext)?.[1];
  const user = useAppSelector(selectCurrentUser);
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 340 }}
      cover={<img alt={name} src={image} />}>
      <Meta title={name} description={`${year}, ${genre}, ${author} `} />

      {user.id === user_id && Edit && Delete ? (
        <Space style={{ marginTop: '2rem' }}>
          <Edit {...book} />

          <Delete {...book} />
        </Space>
      ) : (
        ''
      )}
    </Card>
  );
};
