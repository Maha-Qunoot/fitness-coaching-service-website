import React from "react";
import Image1 from '../assets/paperWireframeWeb/p1.PNG';
import Image2 from '../assets/paperWireframeWeb/p2.PNG';
import Image3 from '../assets/paperWireframeWeb/p3.PNG';
import Image4 from '../assets/paperWireframeWeb/p4.PNG';
import Image5 from '../assets/paperWireframeWeb/p5.PNG';
import Image6 from '../assets/paperWireframeWeb/p6.PNG';
import ImageMobile1 from '../assets/paperWireframeMobileRes/p1.PNG';
import ImageMobile2 from '../assets/paperWireframeMobileRes/p2.PNG';
import ImageMobile3 from '../assets/paperWireframeMobileRes/p3.PNG';


const PaperWireframes = () =>{
    return (
       <div>
      <section className="persona">
      <h2>Paper Wireframes</h2>
      <p>Creating paper sketches of the website allowed me to address user concerns 
         effectively in the digital wireframes.</p>
      <div className="images">
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
      <img src={Image5} alt="" />
      <img src={Image6} alt="" />
      </div>
    </section>

    {/* Paper Wireframes Mobile responsive */}
    <section className="persona">
    <h2>Paper Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in
        ensuring that the digital wireframes effectively addressed user concerns.</p>
    <div className="images">
    <img src={ImageMobile1} alt="" />
    <img src={ImageMobile2} alt="" />
    <img src={ImageMobile3} alt="" />
    </div>
     </section>
    </div>
    );
};
export default PaperWireframes;