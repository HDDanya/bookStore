import * as React from 'react';
import { ConfigProvider } from 'antd';
import { withProviders } from './providers';
import { Routing } from 'pages';
import { EditBookPopUp, DeleteBook, AddToBasket } from 'features/book';

export const buttonsContext = React.createContext<
  React.ElementType[] | undefined
>(undefined);

export const themeContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);
const App = () => {
  const [primary, setPrimary] = React.useState(localStorage.theme);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: primary } }}>
      <themeContext.Provider value={[primary, setPrimary]}>
        <buttonsContext.Provider
          value={[EditBookPopUp, DeleteBook, AddToBasket]}>
          <Routing />
        </buttonsContext.Provider>
      </themeContext.Provider>
    </ConfigProvider>
  );
};

export default withProviders(App);
