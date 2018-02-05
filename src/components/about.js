import React from 'react';

// Images
import Img1 from '../static/images/4.jpg';

const About = () =>
<div id="about" className="about container">
  <div className="about-image">
    <img src={Img1} alt="img-1"/>
  </div>
  <div className="about-text">
    <h2>About Us</h2>
    <p>
      Pita & Wrap offers delicious dining and takeout to Fayetteville, NY.
    </p>
    <br />
    <p>
      Pita & Wrap is a cornerstone in the Fayetteville community and has been recognized for its outstanding cuisine, excellent service and friendly staff.
    </p>
    <br />
    <p>
      Our restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.
    </p>
  </div>
</div>


export default About;
