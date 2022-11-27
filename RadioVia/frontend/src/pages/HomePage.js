import React, { useEffect, useState } from 'react';
// Manejo de API Rest
import axios from 'axios'; 
import MedioItem from '../componentes/medios/MedioItem';
//Hoja de Estilos
import '../styles/componentes/pages/HomePage.css';

const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [medios, setMedios] = useState([]);

    useEffect(() => {
        const cargarMedios = async () => {
            setLoading(true);
                const response = await axios.get('http://localhost:3000/api/api');
                setMedios(response.data);
            setLoading(false)
        };     
        cargarMedios();
    },[]);

    // item.medios.IdMedio --> Agregue 'medios' en el medio de item.IdMedio porque el nodo principal 
    // del JSON que genera mi aplicativo viene con el nombre de la tabla 'medios'

    /*
            <div>
              <img src="img/home/Sound-spectrum-5585.jpg" width="960" height="200" alt="RadioVia" />
            </div>
            <h2>Bienvendios</h2>
    */
    return (

       <main className="holder" >

            <div className="columnas">
                <section className="bienvenidos">
                    <p>Bienvenidos a la Guia Gratuita de Medios de Comunicacion (Radio, Diario y Television)</p>
                </section>

                <section >
                    <div className="Reproductor" id='DivReproductor' name='DivReproductor'>
                        
                    </div>
                    
                    <div className="Listado">
                        {loading ? (<p>cargando...</p>):(
                            medios.map(item => <MedioItem
                                IdMedio={item.medios.IdMedio}
                                Logo={item.medios.Logo}
                                Descripcion={item.medios.Descripcion}
                                WhatsApp={item.medios.WhatsApp}
                                Email={item.medios.Email}
                                URL={item.medios.URL}
                                LinkWinamp={item.medios.LinkWinamp}
                                LinkWMP={item.medios.LinkWMP}
                                Comentarios={item.medios.Comentarios}
                                FchHoraAlta={item.medios.FchHoraAlta}
                                IdUsuario={item.medios.IdUsuario}
                            />)
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomePage;

/*


                                            
{loading ? (<p>cargando...</p>):(
                        medios.map(item => <MedioItem 
                                                key={item.IdMedio}
                                                Descripcion={item.Descripcion}
                                                WhatsApp={item.WhatsApp}
                                                Email={item.Email}
                                                URL={item.URL}
                                                Logo={item.Logo}
                                                LinkWinamp={item.LinkWinamp}
                                                LinkWMP={item.LinkWMP}
                                                Comentarios={item.Comentarios}
                                                FchHoraAlta={item.FchHoraAlta}
                                                IdUsuario={item.IdUsuario}
                                            />)
                    )}
*/


/*
const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="img/home/Sound-spectrum-5585.jpg" width="960" height="200" alt="RadioVia" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvendios</h2>
                    <p>A la Guia Gratuita y Centralizada de Medios de Comunicacion (Radio, Diario y Television)</p>
                </section>
            </div>
        </main>
    );
}
*/
