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

    return (
        <main className="holder">
            <div>
                <img src="img/home/Sound-spectrum-5585.jpg" width="960" height="200" alt="RadioVia" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvendios</h2>
                    <p>A la Guia Gratuita y Centralizada de Medios de Comunicacion (Radio, Diario y Television)</p>
                
                    <h2>Medios</h2>

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
