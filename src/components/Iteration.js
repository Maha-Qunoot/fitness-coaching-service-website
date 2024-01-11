import React from 'react';
import beforesession from '../assets/before session.png';
import aftersession from '../assets/session.png';
import sessionbooked from '../assets/session-booked.png';
import beforerecipes from '../assets/before-recipes.png';
import afterrecipes from '../assets/recipes.png';
import recipesfilter from '../assets/recipes-filter.png';
import sessioncancel from '../assets/cancel-session.png';


const Iteration = () => {
  return (
    <section className="iteration" id="usability-findings">
      <h2>Mockups</h2>

      <div className="finding">
        <h3>Finding 1</h3>
        <p>
        Based on the insights from the usability studies I Create a dedicated <b>Booked page</b> for easy access to all scheduled sessions.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={beforesession} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
         
            <img src={sessionbooked} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 2</h3>
        <p>
        Based on the insights from the usability studies. I <b>Add filters</b> for <b>Dietary Preferences</b> and <b>Allergies</b> in recipes.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={beforerecipes} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={afterrecipes} alt="" />
            <img src={recipesfilter} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 3</h3>
        <p>
        Based on the insights from the usability studies Add <b>delete icon</b> in booked page for users to<b>cancel appointments</b>.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={sessionbooked} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={sessioncancel} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iteration;
