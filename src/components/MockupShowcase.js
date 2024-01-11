import React from 'react';
import homepage from '../assets/homepage.png';
import homepageMobile from '../assets/homepage-1.png';
import recommandplan from '../assets/recommand plan.png';
import recommandplanMobile from '../assets/recommand plan-1.png';
import session from '../assets/session.png';
import sessionMobile from '../assets/session-1.png';
import recipes from '../assets/recipes.png';
import recipesMobile from '../assets/recipes-1.png';

const MockupShowcase = () => {
  return (
      <section className="mockup-showcase">
        <div className="mockup1">
          <img src={homepage} alt="homepage" />
          <img src={homepageMobile} alt="homepage mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={recommandplan} alt="recommand plan " />
          <img src={recommandplanMobile} alt="recommand plan mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={session} alt="session" />
          <img src={sessionMobile} alt="session mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={recipes} alt="recipes" />
          <img src={recipesMobile} alt="recipes mobile version" className="mobile-res" />
        </div>
      </section>
  );
};

export default MockupShowcase;
