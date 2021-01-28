import React from 'react';
import ReactDOM from 'react-dom';
// Import from Redux modules
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import thunkMiddleware from 'redux-thunk'

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { searchRobots, requestRobots } from './reducers';

// Create the logger
const logger = createLogger()


// Create a root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots })
// Create the store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
// const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
        <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
