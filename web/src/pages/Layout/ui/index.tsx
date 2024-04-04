import * as React from 'react';
import { Space, ConfigProvider } from 'antd';
import { useAppSelector } from 'shared/hooks';
import { selectCurrentToken } from 'entities/auth';
import { LogOut } from 'features/auth';
import { CreateBookPopUp } from 'features/book';
export const NavBar = () => {
  const token = useAppSelector(selectCurrentToken);
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorLink: '#fff',
          },
        },
      }}>
      <Space>
        {token ? (
          <>
            <CreateBookPopUp />
            <LogOut />
          </>
        ) : (
          ''
        )}
      </Space>
    </ConfigProvider>
  );
};
