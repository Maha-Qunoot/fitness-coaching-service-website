import React from 'react';

const ProductOverview = () => {
  return (
    <div>
        
       {/* Product Description */}
      <section className="the-product">
        <h1>Fitness coaching service website</h1>
        <p>
        Fitness coaching service website offering personalized workout plans, nutrition guidance, and progress tracking. It's designed for users of all levels, making health and wellness accessible to everyone.
        </p>
      </section>

      {/* Tool & Technologies */}
      <section className="row">
          <div className="col">
            <h5>Timeline</h5>
            <p>November 2023 to December 2023</p>
          </div>

          <div className="col">
            <h5>Tools</h5>
            <p>Figma</p>
          </div>

          <div className="col">
            <h5>Platform</h5>
            <p>Desktop</p>
          </div>
    </section>

    {/* Product Overview */}
    <div className="containers">
        <h2>Product Overview</h2>
        <section className="product-overview">
            <div className="col">
              <h5>My Role</h5>
              <p>UX designer designing a website for fitness coaching service from Ideation to Implementation</p>
            </div>
    
            <div className="col">
              <h5>The Problem</h5>
              <p>lack of a streamlined and personalized fitness solution for individuals.</p>
            </div>
            
            <div className="col">
              <h5>The Goal</h5>
              <p>create a seamless platform that offered tailored fitness regimens and nutritional advice for users with diverse fitness goals and levels.</p>
            </div>
      </section>
    </div>

    {/* responsibilty */}
    <section className="responsibilty">
        <h2>My Responsibilities</h2>
        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs</p>
    </section>
    
    {/* user research pain points */}
    <section className="responsibilty">
        <h2>User Research: Summary</h2>
        <p>During user research for FitBoost, we initially assumed users prioritized tailored workout plans. However, surveys, interviews, and tests revealed a need for a more holistic approach, encompassing not just workouts but also nutritional guidance and progress tracking. This insight drove our platform's development towards offering a comprehensive suite of wellness tools aligned with user preferences.
</p>
    </section>
    
    {/* User Research: Pain Points */}
    <div class="containers color">
        <h2>User Research: Pain Points</h2>
        <section class="product-overview">
            <div class="col-findings one">
              <h5>Lack of Personalization</h5>
              <p>Generic plans disappoint users, prompting the need for personalized workouts and nutrition guidance for individual needs.</p>
            </div>
    
            <div class="col-findings two">
              <h5>Progress Tracking Complexity</h5>
              <p>Users face issues tracking progress, necessitating intuitive tracking features and reminders for enhanced engagement.</p>
            </div>
            
            <div class="col-findings three">
              <h5>Accessibility and Engagement</h5>
              <p>Simplified navigation and improved accessibility will encourage consistent user engagement with the website.</p>
            </div>
      </section>
    </div>
    </div>
  );
};

export default ProductOverview;
