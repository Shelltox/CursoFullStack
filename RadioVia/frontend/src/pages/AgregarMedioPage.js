import React, { useState } from 'react';
import axios from 'axios';
import '../styles/componentes/pages/AgregarMedioPage.css';

const AgregarMedioPage = (props) => {

    const initialForm = {
        Logo: '',
        Descripcion: '',
        Email: '',
        WhatsApp: '',
        URL: '',
        LinkWinamp: '',
        LinkWMP: '',
        Comentarios: '',
        FchHoraAlta: '',
        IdUsuario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //formadinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/api/agregarmedio', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder agregarmedios">
        <div>
            <h2>Agregar Medios</h2>
            <p>Carga los datos en el formulario para indexar tu medio preferido (Radio/Diario/Television)</p>
            <form class="frmagregarmedio" onSubmit={handleSubmit}>

                <p><label for="Descripcion">Nombre del Medio</label>
                    <input type="text" name="Descripcion" value={formData.Descripcion} onChange={handleChange}/>
                </p>
                <p><label for="Email">Email</label>
                    <input type="text" name="Email" value={formData.Email} onChange={handleChange}/>
                </p>
                <p><label for="WhatsApp">WhatsApp</label>
                    <input type="text" name="WhatsApp" value={formData.WhatsApp} onChange={handleChange}/>
                </p>
                <p><label for="URL">URL</label>
                    <input type="text" name="URL" value={formData.URL} onChange={handleChange}/>
                </p>
                <p><label for="LinkWinamp">Link Winamp</label>
                    <input type="text" name="LinkWinamp" value={formData.LinkWinamp} onChange={handleChange}/>
                </p>
                <p><label for="LinkWMP">Link Windows Media Player</label>
                    <input type="text" name="LinkWMP" value={formData.LinkWMP} onChange={handleChange}/>
                </p>
                <p><label for="Comentarios">Comentarios</label>
                    <textarea name="Comentarios" value={formData.Comentarios} onChange={handleChange}></textarea>
                </p>

                {sending ? ('Enviando...') : (null)}
                {msg ? (msg) : (null)}

                <p><input type="submit" value="Enviar" /></p>
            </form>
        </div>
        
    </main>
    );
}

export default AgregarMedioPage;