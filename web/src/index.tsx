import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setupStore();
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
);
