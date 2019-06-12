import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function Card extends React.Component {
    render() (
        return (
            <div className="comentario">
            
            <img className="comentario__perfil" src={this.props.photo}/>
            
            <div>
            
            <h2 className="comentario__nome">{this.props.name}</h2>
            <h3 className="comentario__subtitulo">{this.props.title}</h3>
            
            <hr/>
            
            <p>{this.props.text}</p>
            
            </div>
            </div>
            )
        }

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