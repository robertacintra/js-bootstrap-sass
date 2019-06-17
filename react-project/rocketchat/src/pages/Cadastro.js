import React from 'react';
import './cadastro.css';
import Globo from '../images/globe.png';
import Inicial from './cadastro/Inicial';

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="cadastro">
                <div className="pagina">
                    <Inicial />
                </div>
            </div>
        )}
}