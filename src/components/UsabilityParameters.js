import React from 'react';
import StudyTypeImage from '../assets/study-type.png';
import LocationImage from '../assets/location.png';
import ParticipantsImage from '../assets/participants.png';
import LengthImage from '../assets/length.png';

const UsabilityParameters = () => {
  return (
    <div>
    
    {/* Usability Study: parameters */}
    <section className="usability">
      <h2>Usability Study: parameters</h2>
      <div className="parameter">
        <div className="group">
          <img src={StudyTypeImage} alt="Study Type" />
          <h4>Study Type</h4>
          <p>Unmoderated usability study</p>
        </div>
        <div className="group">
          <img src={LocationImage} alt="Location" />
          <h4>Location</h4>
          <p>Pakistan, Remote</p>
        </div>
        <div className="group">
          <img src={ParticipantsImage} alt="Participants" />
          <h4>Participants</h4>
          <p>5 participants</p>
        </div>
        <div className="group">
          <img src={LengthImage} alt="Length" />
          <h4>Length</h4>
          <p>10-15 minutes</p>
        </div>
      </div>
    </section>
    
    {/* Usability Study: Findings */}
    <div className="containers color" id="usabilty-findings">
        <h2>Usability Study: Findings</h2>
        <section className="product-overview">
          <div className="col-findings one">
            <h5>Booked Session Page</h5>
            <p>Create a dedicated "Booked" page for easy access to all scheduled sessions, enhancing organization.</p>
          </div>

          <div className="col-findings two">
            <h5>Cancellation Page</h5>
            <p>Implement a "Cancel Session" feature for seamless management of booked appointments.</p>
          </div>

          <div className="col-findings three">
            <h5>Recipe Filtering</h5>
            <p>Add filters for Dietary Preferences and Allergies on the recipe page to streamline recipe searches based on specific dietary needs.</p>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default UsabilityParameters;
