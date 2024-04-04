import { Outlet } from 'react-router';
import { Layout, Flex } from 'antd';
import { layoutStyle, headerStyle, contentStyle } from './lib';
import { NavBar } from './ui';
const { Header, Content } = Layout;
export const LayoutApp = () => {
  return (
    <Flex gap="middle" wrap="wrap" justify="center">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <NavBar />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};
