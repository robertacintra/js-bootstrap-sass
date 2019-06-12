import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// let contadorNum = 0;

// const nome = {
//     primeiroNome:"Roberta",
//     sobreNome: "Cintra"
// }

// function verificarNum(){
//     if(contadorNum === 0) {
//         return <p>Contador não iniciado</p>
//     } else {
//         return <p>Contador iniciado</p>
//     }
// }

// setInterval(function(){
//     contadorNum++
//     const template = 
//                     <div className="container">
//                         <h1>Count: {contadorNum}</h1>
//                         <h2>Oi, {nome.primeiroNome}</h2>
//                         {/* <h3>Olá, {nomeCompleto(null)}</h3> */}
//                         <div>
//                             <button>+1</button>
//                             <button>-1</button>
//                             <button>reset</button>
//                         </div>
//                         {verificarNum()}
//                     </div>
//     ReactDOM.render(template, document.getElementById('root'));
// }, 5000)

//COMPONENTES
// function BemVinda(props){ //propriedades. >sempre< é um objeto.
//     console.log(props)
//     return (
//     <div>
//         <h1>Oi, {props.apelido}</h1>
//     </div>
//     )
// }

// ReactDOM.render(< BemVinda apelido="roxy"/>, document.getElementById('root'));

function Card(props){ 
    return (
    <div className="comentario">
        
            <img className="comentario__perfil" src={props.photo}/>
        
        <div>

            <h2 className="comentario__nome">{props.name}</h2>
            <h3 className="comentario__subtitulo">{props.title}</h3>

            <hr/>

            <p>{props.text}</p>

        </div>
    </div>
    )
}

// class Chocolate extends React.Component {
//     render(){
//         return (
//             <h1>Reprograma - Componentes</h1>
//         )
//     }
// }

// class Person {
//     constructor(nome, idade){
//         this.nome=nome;
//         this.idade=idade;

//     }
// }

// class Profissional extends Person {
//     constructor(nome, idade, profissao) {
//         super(nome, idade);
//         this.profissao=profissao;
//     }
// }

// const mellina = new Person('Mellina', 20)
// const mellinaAdulta = new Profissional('Mellina', 27, 'dev')

function App(){
    return (
        <div>
            <Card 
            photo="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
            name="Nome" 
            title="Título" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            />

            <Card 
            photo="https://media.boingboing.net/wp-content/uploads/2017/03/surprised-cat-04.jpg"
            name="Nome2" 
            title="Título2" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

