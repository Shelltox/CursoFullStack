import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
        <ul className="holder">
            <li><Link to ="index.html">Home</Link></li>
            <li><Link to ="nosotros.html">Nosotros</Link></li>
            <li><Link to ="servicios.html">Servicios</Link></li>
            <li><Link to ="contacto.html">Contacto</Link></li>
            <li><Link to ="agregar.html">Agregar Medios</Link></li>
        </ul>
    </nav>

    );
}

export default Nav;

