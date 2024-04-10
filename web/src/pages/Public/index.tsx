import * as React from 'react';
import { Flex, Space, Typography } from 'antd';

import { Login, Registration } from 'features/auth';
export const Public = () => {
  const { Title } = Typography;
  return (
    <main>
      <Flex
        style={{ marginTop: '2rem' }}
        justify="center"
        align="center"
        vertical>
        <Title level={4}>WELCOME</Title>
        <Space style={{ height: '40px', gap: '1rem' }}>
          <Registration />
          <Login />
        </Space>
      </Flex>
    </main>
  );
};
