import * as React from 'react';
import { Button } from 'antd';
import { Book } from 'shared/types';
import { HeartTwoTone } from '@ant-design/icons';
import { useAddToBasketMutation, setCount } from 'entities/book';
import { useAppDispatch } from 'shared/hooks';
export const AddToBasket: React.FC<Book> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const [addToBasket] = useAddToBasketMutation();

  const handleSubmit = async () => {
    try {
      const data = await addToBasket(props).unwrap();

      dispatch(setCount(data.length));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      style={{ position: 'absolute', top: 5, left: 10 }}
      shape="circle"
      onClick={handleSubmit}>
      <HeartTwoTone twoToneColor="#eb2f96" />
    </Button>
  );
};
