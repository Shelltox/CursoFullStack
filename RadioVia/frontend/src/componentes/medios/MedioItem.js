import React from 'react';

const MedioItem = ({ IdMedio, Descripcion, LinkWMP}) => {
    //{ IdMedio, Logo, Descripcion, WhatsApp, Email, URL, LinkWinamp, LinkWMP, Comentarios, FchHoraAlta, IdUsuario }
    return (
            <div>
                <a href={LinkWMP} target='DivReproductor'> {Descripcion} </a>
            </div>    
    )
}

export default MedioItem;

/*
    <h3>key: {IdMedio}</h3>
    <img src={Logo} height={100} width={100}></img>
    <h4>Descripcion: {Descripcion}</h4>
    <h4>WhatsApp: {WhatsApp}</h4>
    <h4>Email: {Email}</h4>
    <h4>URL: {URL}</h4>
    <h4>LinkWinamp: {LinkWinamp}</h4>
    <h4>LinkWMP: {LinkWMP}</h4>
    <h4>Comentarios: {Comentarios}</h4>
    <h4>FchHoraAlta: {FchHoraAlta}</h4>
    <h4>IdUsuario: {IdUsuario}</h4>
    <hr />

    <div dangerouslySetInnerHTML={{ __html: body}} />
*/
