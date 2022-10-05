import React from 'react';
import {NavLink} from "react-router-dom"; /* https://reactrouter.com/en/main/components/nav-link */
import '../../styles/componentes/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "activo": undefined}  to ="/Home">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": undefined}  to ="/Nosotros">Nosotros</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": undefined}  to ="/Servicios">Servicios</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": undefined}  to ="/Contacto">Contacto</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo": undefined}  to ="/AgregarMedio">Agregar Medios</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

