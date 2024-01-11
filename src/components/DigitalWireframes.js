import React from "react";
import digitalHomepage from '../assets/lo-fi homepage.png'
import digitalHomepageMobile from '../assets/lo-fi homepage-1.png'
import digitalMenu from '../assets/menu.png'


const DigitalWireframes = () =>{
    return (
       <div>
  <section className="persona digital-wireframe">
    <h2>Digital Wireframes</h2>
    <p>To make the digital wireframes, I started by putting my ideas on paper. Then I began to work on the low-fidelity wireframes in Figma. After several iterations, I came up with these wireframes.</p>
    <img src={digitalHomepage} alt="Digital wireframe" />
  </section>

  {/* Digital Wireframes Mobile responsive */}
  <section className="persona digital-wireframe-mobile">
    <h2>Paper Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in ensuring that the digital wireframes effectively addressed user concerns.</p>
    <div className="images">
    <img src={digitalHomepageMobile} alt="" />
    <img src={digitalMenu} alt="" className="img-menu" />
    </div>
  </section>
       </div>
    );
};
export default DigitalWireframes;