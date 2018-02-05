import React from 'react';

// Components
import Burrito from './burrito';
import Pita from './pita';
import Bowl from './bowl';
import Taco from './taco';

const NoodleSoup = () =>
  <div className="customize">
    <h3 className="item-header">Build Your Own</h3>
    <h3 className="item-header">Step 1: Choose 1 Style</h3>
    <div className="customize-choose">
      <h3>Mexican</h3>
      <h3>Korean</h3>
      <h3>Chinese</h3>
    </div>
    <br />
    <h3 className="item-header">Step 2: Choose 1 From Below</h3>
    <div className="customize-item">
      <div className="item-left">
        <div><Pita /></div>
        <div><Burrito /></div>
      </div>
      <div className="item-right">
        <div><Taco /></div>
        <div><Bowl /></div>
      </div>
    </div>
      <br />
     <div className="customize-side">
       <h5>Add Side: Shrimp 3.5 / Imitation Crabmeat 2.5</h5>
     </div>
   </div>

export default NoodleSoup;
