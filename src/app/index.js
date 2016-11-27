import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from 'reducers';
import App from 'app/App';
import './index.css';

const combinedReducers = combineReducers({
    ...reducers
});

const store = createStore( combinedReducers, applyMiddleware(thunk) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
