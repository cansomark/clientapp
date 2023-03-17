import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Component/App';
import { Provider } from 'react-redux';
import { store } from './store';
import "./style/style.css"
import 'semantic-ui-css/semantic.min.css';
import AppRoutes from './route/routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
);