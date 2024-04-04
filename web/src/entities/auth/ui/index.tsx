import * as React from 'react';
import { Button, Form, Input, Modal, Alert } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
type AuthModalProps = {
  text?: string;
  email?: string;
  password?: string;
  errMsg?: string;
  handleUserInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  handlePasswordInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSubmit?(e: React.FormEvent): void;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthPopUp: React.FC<AuthModalProps> = ({
  text,
  email,
  password,
  errMsg,
  handlePasswordInput,
  handleUserInput,
  handleSubmit,
  setErrMsg,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setErrMsg('');
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {text}
      </Button>
      <Modal
        title={text}
        open={isModalOpen}
        onOk={handleSubmit}
        okText="Отправить"
        cancelText="Отмена"
        onCancel={handleCancel}>
        <Form
          name={text}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please input your username!' },
            ]}>
            <Input
              autoComplete="on"
              type="email"
              value={email}
              onChange={handleUserInput}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}>
            <Input.Password
              autoComplete="on"
              type="password"
              value={password}
              onChange={handlePasswordInput}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {errMsg ? <Alert message={errMsg} type="error" /> : ''}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
