import React from 'react';
import '../styles/componentes/pages/ServiciosPage.css';
const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <div className="servicios">
            <h2>Servicios</h2>

            <div className="servicio">
                <img src="img/servicios/Multimedia-mobile-phone-110.jpg" alt="Guia de Radios En Linea"/>
                <div className="info">
                    <h4>Guia de Radios En Linea</h4>
                    <p>Buscador de Radios En Linea de la Region y mas alla.. en constante crecimiento!</p>
                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/Crowd-cheering-at-concert642.jpg" alt="Guia de Diarios En Linea"/>
                <div className="info">
                    <h4>Guia de Diarios En Linea</h4>
                    <p>Buscador de Diarios en Linea de la Region y mas alla.. en constante crecimiento!</p>
                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/Telecommunications-satellite1295.jpg" alt="Guia de Television En Linea"/>
                <div className="info">
                    <h4>Guia de Television En Linea</h4>
                    <p>Buscador de Canales de Television en Linea de la Region y mas alla.. en constante crecimiento!</p>
                </div>
            </div>

        </div>
    </main>
    );
}

export default ServiciosPage;