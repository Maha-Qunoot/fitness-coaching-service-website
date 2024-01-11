import React from 'react';
import personaImage from '../assets/persona.PNG'; 

const Persona = () => {
  return (
    <section className="persona" id="persona">
      <h2>Persona: Jason turner</h2>
      <img src={personaImage} alt="Persona2" />
      <h4>Problem Statement</h4>
      <p>
      Jason turner is a tech-savvy individual with Type 2 diabeteswho needs user-friendly fitness coaching accessible on a desktop because he understands the importance of managing his diabetes and fitness effectively through technology.
      </p>
    </section>
  );
};

export default Persona;

