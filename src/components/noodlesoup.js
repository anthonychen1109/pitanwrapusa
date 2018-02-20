import React from 'react';

const noodlesoup = [
  {
    name: 'Real Chicken Broth with Noodles',
    price: 7.95
  },
  {
    name: 'Real Beef Broth with Noodles',
    price: 8.95
  },
]

const NoodleSoup = () =>
  <div className="noodlesoup">
     <h3 className="item-header">Noodle Soup</h3>
     {noodlesoup.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default NoodleSoup;
