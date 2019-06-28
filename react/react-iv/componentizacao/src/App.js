import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="texto">Bem vindo ao Reprograma
      
      {this.state.nome !== '' ? ', ' : ''}

      {this.state.nome }
      
      </div>
    </div>
  );
}

export default App;
