import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, ColorPicker, Badge, Col, Row } from 'antd';
import { useAppSelector } from 'shared/hooks';
import { selectCurrentToken } from 'entities/auth';
import { LogOut } from 'features/auth';
import { CreateBookPopUp } from 'features/book';
import { themeContext } from 'app';
import { ReactComponent as basketIcon } from 'assets/shoppingCart.svg';
import Icon from '@ant-design/icons';
import { selectCount } from 'entities/book';
export const NavBar = () => {
  const count = useAppSelector(selectCount);
  const token = useAppSelector(selectCurrentToken);

  const theme = React.useContext(themeContext);

  if (theme) localStorage.setItem('theme', theme?.[0]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorLink: '#fff',
          },
        },
      }}>
      <Row style={{ width: '100%' }}>
        <Col span={6}>
          <ColorPicker
            showText
            value={localStorage.theme}
            onChangeComplete={(color) => theme?.[1](color.toHexString())}
          />
        </Col>
        {token && (
          <>
            <Col span={6}>
              <CreateBookPopUp />
            </Col>
            <Col span={6}>
              <LogOut />
            </Col>
            <Col span={6}>
              <Link to={'/basket'}>
                <Badge
                  count={count ? count : localStorage.bookCount}
                  color={theme?.[0]}
                  size="small">
                  <Icon
                    component={basketIcon}
                    style={{ color: theme?.[0], fontSize: 25 }}
                  />
                </Badge>
              </Link>
            </Col>
          </>
        )}
      </Row>
    </ConfigProvider>
  );
};
