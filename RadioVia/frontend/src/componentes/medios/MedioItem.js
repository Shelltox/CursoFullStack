import React from 'react';

const MedioItem = (props) => {
    const { key, Logo, Descripcion, WhatsApp, Email, URL, LinkWinamp, LinkWMP, Comentarios, FchHoraAlta, IdUsuario } = props;
    return (
        <div className="MedioItem">
            <h3>key: {key}</h3>
            <img src={Logo}></img>
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
        </div>
    )
}

export default MedioItem;

/*
<h2>{key}</h2>
                <img src={Logo}></img>
                <h1>{Descripcion}</h1>
                <h2>{WhatsApp}</h2>
                <h2>{Email}</h2>
                <h2>{URL}</h2>
                <h2>{LinkWinamp}</h2>
                <h2>{LinkWMP}</h2>
                <h2>{Comentarios}</h2>
                <h2>{FchHoraAlta}</h2>
                <h2>{IdUsuario}</h2>
                <hr />

<div dangerouslySetInnerHTML={{ __html: body}} />
*/
