import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            fontSize: 16,
          },
          Switch: {
            handleSize: 14,
            trackPadding: 4,
          },
          Button: {
            defaultHoverBg: '#6B47ED',
            defaultHoverColor: 'white',
          },
          Radio: {
            buttonCheckedBgDisabled: '#D8D8D8',
            buttonCheckedColorDisabled: '#D8D8D8',
            dotColorDisabled: '#D8D8D8',
            dotSize: 0,
            radioSize: 12,
          },
          Checkbox: {
            colorWhite: '#6B47ED',
            controlInteractiveSize: 12,
          },
        },
        token: {
          colorPrimary: '#6B47ED',
          borderRadiusSM: 99,
          fontFamily: 'Nunito',
          /* here is your global tokens */
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
