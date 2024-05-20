import React from 'react';  //这行代码的意义在于更好编译jsx
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 引入 BrowserRouter
import store from './store'
import { Provider} from 'react-redux'
import '@/assets/styles/index.less';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>

    </BrowserRouter>
  </React.StrictMode>
);
