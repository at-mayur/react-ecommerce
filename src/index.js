import React from 'react';
import ReactDOM from 'react-dom/client';
import NotificationProvider from "use-toast-notification";

import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';


const thunk = ({ dispatch, getState }) => (next) => (action) => {

  if(typeof action === 'function'){
    action(dispatch);
    return;
  }

  next(action);

};

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationProvider 
        config={{
          position: 'top-right',
          showClose: true,
          showIcon: true,
          showTitle: true,
          duration: 5, 
        }}>

        <App store={store} />
        
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

