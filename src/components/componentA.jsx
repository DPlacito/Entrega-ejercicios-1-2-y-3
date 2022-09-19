import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';


const ComponentA = () => {

    const defaultContact = new Contact('Daniel', 'Placito', 'arturofiitcher@outlook.com', false);


    return (
        <div>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};

export default ComponentA;
