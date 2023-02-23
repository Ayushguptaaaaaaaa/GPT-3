import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'We deliver you results from the most trusted source of information giving you an edge that you can challenge anyone with confindence.',
  },
  {
    title: 'Become the tended active',
    text: 'Straight and crisp in nature will enhance your productivity in leaps and bounds and will give confindence to achieve your goal you always dream of.',
  },
  {
    title: 'Your Most reliable Friend',
    text: 'GPT-3 is powered by the pinnacle of Artifical Intelligence in this modern world making it able to solve the most complex of the queries with ease.',
  },
  {
    title: 'Personalized Help',
    text: 'Manier times you to learn from other people and not simply copy it, like the beautiful pick-up lines to your crush should be Inspired not copied, It is simple, our powerful AI understands all your need and deliver you results which shall make your crush and well your client overwhelmed',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;