import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>We are not yet another search engine, instead we are paving the pathway to future for humankind where we render all possibilities to upgrade and enter into new domains, enter the unknown worlds. Join us in our endeavour, WITNESS THE CHANGE, BE THE CHANGE.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);


export default Possibility
