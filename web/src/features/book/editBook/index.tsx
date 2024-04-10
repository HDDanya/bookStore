import * as React from 'react';
import { ErrorHandler } from 'shared/lib';
import { Button, Form, Input, Modal, Alert } from 'antd';
import { useEditeBookMutation } from 'entities/book';
import { Book } from 'shared/types';
export const EditBookPopUp: React.FC<Book> = ({ ...Props }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [book, setBook] = React.useState<Book>(Props);
  const [errMsg, setErrMsg] = React.useState<string>('');
  const [editeBook] = useEditeBookMutation();
  const bookArr = Object.keys(book);
  React.useEffect(() => {
    setErrMsg('');
  }, [errMsg]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setErrMsg('');
    setIsModalOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editeBook(book).unwrap();
    } catch (err) {
      ErrorHandler(err, setErrMsg);
    }
  };

  return (
    <>
      <Button onClick={showModal}>Edit</Button>
      <Modal
        open={isModalOpen}
        onOk={handleSubmit}
        okText="Edit"
        cancelText="Cancel"
        onCancel={handleCancel}>
        <Form
          initialValues={book}
          name={Props.name}
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
