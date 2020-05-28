import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Reducer from './store/shopReducer/shopReducer';


const store = createStore(Reducer);


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
  ;

ReactDOM.render(
  app,
  document.getElementById('root')
);


