import React from 'react';
import ReactDOM from 'react-dom/client';
import NotificationProvider from "use-toast-notification";

import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';


// Creating a thunk to handle API related updates
const thunk = ({ dispatch, getState }) => (next) => (action) => {

  // if receive function as action instead of object
  if(typeof action === 'function'){
    // call this function with dispatch func as argument
    action(dispatch);
    return;
  }

  // Otherwise execute next steps
  next(action);

};

// Creating a middleware with root reducer and thunk created above
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Wrapping whole app component within BrowserRouter */}
    <BrowserRouter>

      {/* Wrapping whole app component within NotificationProvider to display notification */}
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

