import React from "react";
import LowFiPrototypeImage from '../assets/lo-fi prototype.PNG'; // Adjust the path accordingly

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        <p>
        After turning the final wireframes .I created a low-fidelity prototype wireframes to test functionality of Fitness Coaching Service website and ensure accessibility for end-users.
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
