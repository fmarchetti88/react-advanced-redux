import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { todoStore } from './redux/store';
import AppLazy from './AppLazy';
import AppRouting from './AppRouting';
import AppHOC from './AppHOC';
import AppCtx from './AppCtx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <>
        <App />
        <AppLazy />
        <AppRouting />
        <AppHOC />
        <AppCtx />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
