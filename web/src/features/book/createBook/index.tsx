import * as React from 'react';
import { Button, Form, Input, Modal, Alert } from 'antd';
import { Book } from 'shared/types';
import { useCreateBookMutation } from 'entities/book/api';
import { ErrorHandler } from 'shared/lib';

export type FieldType = Book & {
  remember?: string;
};

export const CreateBookPopUp = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [book, setBook] = React.useState<Book>({
    id: 0,
    user_id: 0,
    name: '',
    year: '',
    genre: '',
    author: '',
    image: '',
  });
  const [errMsg, setErrMsg] = React.useState<string>('');
  const bookArr = Object.keys(book);
  React.useEffect(() => {
    setErrMsg('');
  }, [book]);
  const [createBook] = useCreateBookMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBook(book).unwrap();
    } catch (err) {
      ErrorHandler(err, setErrMsg);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setErrMsg('');
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="link" onClick={showModal}>
        CREATE
      </Button>
      <Modal
        open={isModalOpen}
        onOk={(e) => {
          handleSubmit(e);
          form.resetFields();
        }}
        okText="Send"
        cancelText="Cancel"
        onCancel={handleCancel}>
        <Form
          form={form}
          name="book"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}>
          {bookArr.slice(2).map((el: string, i) => (
            <Form.Item
              key={i}
              label={el}
              name={el}
              rules={[{ required: true, message: `Please input ${el}!` }]}>
              <Input
                value={book[el as keyof Book]}
                onChange={(e) =>
                  setBook({ ...book, [el as keyof Book]: e.target.value })
                }
              />
            </Form.Item>
          ))}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {errMsg ? <Alert message={errMsg} type="error" /> : ''}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
