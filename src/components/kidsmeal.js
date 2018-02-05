import React from 'react';

const kidsmeal = [
  {
    name: 'Chicken',
    price: "6.50"
  },
  {
    name: 'Beef',
    price: 7.25
  },
  {
    name: 'Pork',
    price: 6.25
  },
]

const KidsMeal = () =>
  <div className="kidsmeal">
     <h3 className="item-header">Kids Meal</h3>
     {kidsmeal.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
     <br />
     <div className="customize-side">
       <h5>Sides: 2.5 / Drinks 2.5</h5>
     </div>
   </div>

export default KidsMeal;
