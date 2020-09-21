import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'

const Hat = () => (
  <h1>Hats</h1>
)

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/hats' component={ Hat } />
    </div>
  );
}

export default App;
