import React from 'react';

const AccessibilityConsiderations = () => {
  return (
    <div className="containers color">
      <h2>Accessibility considerations</h2>
      <section className="product-overview">
        <div className="col-findings one">
          <p>Enhance text-background contrast and design clarity for improved readability, benefiting users with visual impairments.</p>
        </div>

        <div className="col-findings two">
          <p>Enable keyboard-friendly functionalities and visible focus indicators for effortless navigation, particularly aiding users with motor disabilities.</p>
        </div>

        <div className="col-findings three">
          <p>Ensure descriptive alt text, proper labeling, and semantic markup for screen reader compatibility, assisting users with visual impairments in accessing content.</p>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityConsiderations;
