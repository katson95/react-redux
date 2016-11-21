import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import '../public/css/index.css';
import reducer from './reducers';
import ReduxPromise from 'redux-promise';
import {Router, browserHistory} from 'react-router';
import routes from './routes';


const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(

  <Provider store={store(reducer)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
