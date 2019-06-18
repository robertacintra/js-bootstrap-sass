import React from 'react';
//pages
import Home from './pages/Home';
import './App.css';
import Nav from './components/Nav';
import Chat from './pages/Chat';
import Cadastro from './pages/cadastro/Cadastro';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/chat" component={Chat}/>
      </div>
    </Switch>
  );
}

export default App;
