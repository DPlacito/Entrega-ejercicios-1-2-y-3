import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import { useState } from 'react';


const ComponentB = ({ contact }) => {

    const [status, setStatus] = useState(contact.conect);


    const changeConect = () => {
        console.log(status)
        if (status === false) {
            setStatus(contact.conect = true);
        } else {
            setStatus(contact.conect = false);
        }
    }


    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: {contact.lastName}</h2>
            <h4>Correo: {contact.email}</h4>
            <h4>Conectado: {contact.conect ? 'Contacto En Linea' : 'Contacto No Disponible'}</h4>

            <button onClick={changeConect}>Cambiar Estado</button>
        </div>
    );



};





ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;
