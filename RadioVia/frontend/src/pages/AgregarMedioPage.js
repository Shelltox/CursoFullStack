import React from 'react';

const AgregarMedioPage = (props) => {
    return (
        <main className="holder agregarmedios">
        <div>
            <h2>Agregar Medios</h2>
            <p>Carga los datos en el formulario para indexar tu medio preferido (Radio/Diario/Television)</p>
            <form action="" method="" class="frmagregarmedio">

                <p><label for="nombre">Nombre del Medio</label>
                    <input type="text" name="" />
                </p>
                <p><label for="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p><label for="telefono">WhatsApp</label>
                    <input type="text" name="" />
                </p>
                <p><label for="telefono">URL</label>
                    <input type="text" name="" />
                </p>
                <p><label for="telefono">Link Winamp</label>
                    <input type="text" name="" />
                </p>
                <p><label for="telefono">Link Windows Media Player</label>
                    <input type="text" name="" />
                </p>
                <p><label for="mensaje">Comentarios</label>
                    <textarea name=""></textarea>
                </p>

                <p><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        
    </main>
    );
}

export default AgregarMedioPage;