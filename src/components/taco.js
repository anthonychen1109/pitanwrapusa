import React from 'react';

const taco = [
  {
    name: 'Chicken (Hot or Cold)',
    price: "7.50"
  },
  {
    name: 'Beef',
    price: "8.50"
  },
  {
    name: 'Pork',
    price: "7.50"
  },
]

const Taco = () =>
  <div className="taco">
     <h3 className="item-header">Taco</h3>
     {taco.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default Taco;
