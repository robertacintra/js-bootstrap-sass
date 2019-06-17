import React from 'react';
import Menu from './Menu';
import Logo from '../images/RocketChat.png';
import './nav.css';

export default function Nav(props){
    return (
        <nav className='navbar'>
            <div>
            <img className='navbar-logo' src={Logo} alt='Logotipo da RocketChat'/>
            </div>
            <Menu />
        </nav>
    )
}