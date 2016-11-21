import React from 'react';
import { Route, IndexRoute} from 'react-router';

import PostsIndex from './components/main-index.jsx'

import App from './components/app';

const Greeting1 =() =>{
  return <div>Hi There 1 !</div>
}

const Greeting2 =() =>{
  return <div>Hi There 2 !</div>
}

const Greeting3 =() =>{
  return <div>Hi There 3 !</div>
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="greet1" component={Greeting1} />
    <Route path="greet2" component={Greeting2} />
    <Route path="greet3" component={Greeting3} />
  </Route>
);
