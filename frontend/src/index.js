import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import  configureStore  from './store/index';
import { Provider } from 'react-redux';
import { preloadedModals } from './store/ui';

const store = configureStore(preloadedModals)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

window.store = store