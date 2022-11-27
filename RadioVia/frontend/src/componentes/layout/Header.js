import React from 'react';
import '../../styles/componentes/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/home/logo.svg" width="100"/>
                <h1>RadioVia</h1>
            </div>
        </header>
    );
}

export default Header;
