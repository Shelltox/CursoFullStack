import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
        <ul className="holder">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Nosotros">Nosotros</Link></li>
            <li><Link to ="/Servicios">Servicios</Link></li>
            <li><Link to ="/Contacto">Contacto</Link></li>
            <li><Link to ="/AgregarMedio">Agregar Medios</Link></li>
        </ul>
    </nav>

    );
}

export default Nav;

