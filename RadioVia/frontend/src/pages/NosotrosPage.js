import React from 'react';
import '../styles/componentes/pages/NosotrosPage.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>La Guia Gratuita y Centralizada de Medios de Comunicacion, nacio producto de la necesidad de tener a mano
                y en un solo lugar todas las sintonias radiales en linea que escuchaba en aquellos tiempos, estamos
                hablando del año 2007, radios que acompañaban mis largas horas de trabajo como programador informatico.
                Poco a poco el numero de frecuencias fue en aumento, diarios on line y emisioras on line de television.
                Las radios se comunicaban conmigo para que los agregue a la Guia, ya que para varios otros
                oyentes les resultaba practico acceder a sus radios preferidas a traves de www.radiovia.com.ar, hasta
                octubre de 2010 que por razones personales tuve que cerrar el sitio.-</p>
            <p>Hoy ya transcurriendo el final del año 2022 decidi reflotar este proyecto como una forma de conectarme
                nuevamente con mi pasado emprendedor, espero que alcance para llenar sus espectativas tanto para los
                oyentes como para las radios y medios en general.</p>
            <p>Desde ya Muchas Gracias y muy Cordiales Saludos</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/MartinRod314.jpg" alt="Martin Rodriguez"/>
                    <h5>Martin Rodriguez</h5>
                    <br/>
                    <h6>Fundador</h6>
                    <h6>Administracion</h6>
                    <h6>Programador FullStack</h6>
                    <h6>Community Manager</h6>
                    <h6>Marketing Digital</h6>
                    
                </div>
            </div>
       </div> 
    </main>
    );
}

export default NosotrosPage;