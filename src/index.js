import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers);

ReactDOM.render(
  <Provider stpore={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));