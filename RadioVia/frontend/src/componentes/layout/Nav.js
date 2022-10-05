import React from 'react';
import {NavLink} from "react-router-dom";
import '../../styles/componentes/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "activo": "non-active-class"}  to ="/Home">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": "non-active-class"}  to ="/Nosotros">Nosotros</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": "non-active-class"}  to ="/Servicios">Servicios</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": "non-active-class"}  to ="/Contacto">Contacto</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": "non-active-class"}  to ="/AgregarMedio">Agregar Medios</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

