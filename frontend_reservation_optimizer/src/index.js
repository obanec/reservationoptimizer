import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store/configure'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider >
  </React.StrictMode>
);
