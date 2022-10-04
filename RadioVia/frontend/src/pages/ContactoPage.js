import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contactate conmigo..</h2>

            <form action="" method="" class="formulario">

                <p><label for="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p><label for="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p><label for="telefono">WhatsApp</label>
                    <input type="text" name="" />
                </p>
                <p><label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>

                <p><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vias de Contactarme..</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
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