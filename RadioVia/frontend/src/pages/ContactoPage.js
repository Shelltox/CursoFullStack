import React, { useState } from 'react';
import axios from 'axios';
import '../styles/componentes/pages/ContactoPage.css';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
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
        const response = await axios.post('http://localhost:3000/api/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contactate conmigo..</h2>
                <form className="formulario" onSubmit={handleSubmit}>

                    <p><label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p><label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p><label for="telefono">WhatsApp</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p><label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    {sending ? ('Enviando...') : (null)}
                    {msg ? (msg) : (null)}

                    <p><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="datos">
                <h2>Tambien podes contactarte conmigo... </h2>
                <ul>
                    <li>Telefono: +4593624250761</li>
                    <li>WhatsApp: +4593624250761</li>
                    <li>Correo Electronico: TPDiplomatura@radiovia.com.ar</li>
                    <li>Facebook: TPDiplomatura@radiovia.com.ar</li>
                    <li>Twitter: TPDiplomatura@radiovia.com.ar</li>
                    <li>Instagram: TPDiplomatura@radiovia.com.ar</li>
                </ul>
            </div>
        </main>
    );
}


export default ContactoPage;

