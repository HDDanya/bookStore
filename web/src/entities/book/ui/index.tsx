import * as React from 'react';
import { Card, Space } from 'antd';
import { Book } from 'shared/types';
import { selectCurrentUser } from 'entities/auth';
import { useAppSelector } from 'shared/hooks';
import { buttonsContext } from 'app';

export const BookSingleCard: React.FC<Book> = ({ ...props }) => {
  const Edit = React.useContext(buttonsContext)?.[0];
  const Delete = React.useContext(buttonsContext)?.[1];
  const AddToBasket = React.useContext(buttonsContext)?.[2];
  const user = useAppSelector(selectCurrentUser);
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 340 }}
      cover={<img alt={props.name} src={props.image} height={300} />}>
      <Meta
        title={props.name}
        description={`${props.year}, ${props.genre}, ${props.author} `}
      />
      {AddToBasket && <AddToBasket {...props} />}
      {user.id === props.user_id && Edit && Delete ? (
        <Space style={{ marginTop: '2rem' }}>
          <Edit {...props} />

          <Delete {...props} />
        </Space>
      ) : (
        ''
      )}
    </Card>
  );
};
