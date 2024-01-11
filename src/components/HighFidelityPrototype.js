import React from 'react';
import HighFiPrototypeImage from '../assets/hi-fi prototype.PNG'; // Adjust the path accordingly

const HighFiPrototype = () => {
  return (
    <section className="prototype" id="high-fi">
      <div className="prototype-info">
        <h3>High-Fidelity Prototype</h3>
        <p>My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design changes made after the usability study such as session booking, session cancellation and recipe filter.</p>
        <a href="https://www.figma.com/proto/pRnhQi95Mz1O3uZmXDLILD/fitness-coaching-services-app?type=design&node-id=149-506&t=PguIMvEN79rcijtY-1&scaling=min-zoom&page-id=53%3A1940&mode=design" target="_blank" rel="noopener noreferrer">View High-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={HighFiPrototypeImage} alt="High-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default HighFiPrototype;
