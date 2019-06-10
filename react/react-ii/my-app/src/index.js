import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let contadorNum = 0;

const nome = {
    primeiroNome:"Roberta",
    sobreNome: "Cintra"
}

function nomeCompleto(nome){
    if(nome) {
        return nome.primeiroNome + ' ' + nome.sobreNome;
    } else {
        return 'desconhecida';
    }
}

const template = 
    <div className="container">
        <h1>Count: {contadorNum}</h1>
        <h2>Oi, {nome.primeiroNome}</h2>
        <h3>Olá, {nomeCompleto(null)}</h3>
        <div>
            <button>+1</button>
            <button>-1</button>
            <button>reset</button>
        </div>
    </div>
ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();