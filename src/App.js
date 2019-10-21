import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Switch>
    <Route path='/' exact component={Join} />
    <Route path='/chat' component={Chat} />
  </Switch>
)



export default App;
