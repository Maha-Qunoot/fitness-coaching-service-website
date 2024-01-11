import React from 'react';
import UJmap from '../assets/user jounery map.PNG'; // Adjust the path accordingly

const  UserJourneyMap= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Jason turner aims to find user-friendly website on his desktop computer to optimize his fitness routine, particularly for managing diabetes.</p>
        <img src={UJmap} alt="User Journey Map" />
    </section>
  );
};

export default UserJourneyMap;

