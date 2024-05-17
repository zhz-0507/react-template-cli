import React from 'react';  //这行代码的意义在于更好编译jsx
import ReactDOM from 'react-dom/client';
import App from './App';

import '@/assets/styles/index.less';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
