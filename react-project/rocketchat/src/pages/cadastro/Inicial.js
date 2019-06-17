import React from 'react';
import Astronauta from '../images/astronaut.png';

export default class Inicial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='pagina'>
                <h2>Cadastro Pessoa Física</h2>
                <div className="pagina__botao">
                    <button className="botao-imagem">
                        <img src={Astronauta} alt="Ícone astronauta"/>
                        <span>Pessoa Física</span>
                    </button>
            </div>
        )
    }
}