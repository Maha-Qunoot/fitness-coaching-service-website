import React from "react";
import LowFiPrototypeImage from '../assets/lo-fi prototype.PNG'; // Adjust the path accordingly

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        <p>
          After turning the final wireframes into a prototype and conducting a usability study, I improved the prototype to show how users go through steps like choosing a restaurant, pre-ordering, entering reservation details, adding payment options, and confirming the reservation
        </p>
        <a href="https://www.figma.com/proto/pRnhQi95Mz1O3uZmXDLILD/fitness-coaching-services-app?type=design&node-id=123-1367&t=jIIYHmulvqrfqysq-1&scaling=scale-down&page-id=23%3A2&mode=design" target="_blank" rel="noopener noreferrer">View Low-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={LowFiPrototypeImage} alt="Low-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default LowFiPrototypeSection;
