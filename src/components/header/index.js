import React from 'react';
import './style.css';
const Header = ({title}) => (
    <header>
        <h1 className="font-weigh-bold">{title?title:"Escriba un Titulo"}</h1>
    </header>
);

export default Header;