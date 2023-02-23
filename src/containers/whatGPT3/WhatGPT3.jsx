import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is a user-friendly easy to use platform which provides multiple advantages to the users helping them in all sorts of ways to make their a lil more simpler, hence removing all the various hassle we have to face in our everyfday life saving us a lot of efforts and time, optimizing evrything from a simple google search to various complex research topics, which are hard to find." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Your own Personal Buddy whom who can ask all your queries and share all your peoblems, and this bestfriend of yours will help u out in almost everything from your relationship to your Assignments, Now who does'nt want a friend like this?" />
      <Feature title="Knowledgebase" text="Everything You wanna learn about, and everything you are curious about is simply answered in the most optimized way saving you all the useless hassle, delivering you straight crisp understanding." />
      <Feature title="Education" text="GPT-3 provides instant feedback for students, which can help them improve their writing skills. While AI should not replace a teacher's lessons, it can serve as a practice tool for teachers to use in the classroom and a way to switch it up and provide something new for students." />
    </div>
  </div>
);

export default WhatGPT3;