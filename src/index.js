import React from 'react';
import ReactDOM from 'react-dom';
// Import from Redux modules
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { searchRobots } from './reducers';

// Create the store
const store = createStore(searchRobots)

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
