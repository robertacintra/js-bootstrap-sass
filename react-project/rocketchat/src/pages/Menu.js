import React from 'react';
import { Link } from "react-router-dom";
import './menu.css'

export default class Menu extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            aberto: false,
        }
    }

    handleAbreOuFecha = a => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto}
        })
    }

    render() {
        let classeDasOpcoes = 'navbar-menu__opcoes'
        let classeDoBotao = 'navbar-menu__botao'

        if(this.state.aberto) {
            classeDasOpcoes += 'navbar-menu__opcoes--aberto'
            classeDoBotao += 'navbar-menu__botao--aberto'
        } else {

        }

        return (
            <div className='navbar-menu navbar-links'>
                <a className={classeDoBotao} onClick={this.handleAbreOuFecha}> Menu </a>
                <ul className={classeDasOpcoes}>
                    <li>
                        <Link to="/"className="navbar-links__ativo">Home</Link>
                    </li>
                    <li>
                        <Link to="/"className="navbar-links__ativo">Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/"className="navbar-links__ativo">Chat</Link>
                    </li>
                </ul>
            </div>
        )
    }
}