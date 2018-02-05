import React from 'react';

const pita = [
  {
    name: 'Chicken (Hot or Cold)',
    price: 6.95
  },
  {
    name: 'Beef',
    price: 7.95
  },
  {
    name: 'Pork',
    price: "6.50"
  },
]

const Pita = () =>
  <div className="pita">
     <h3 className="item-header">Pita</h3>
     {pita.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default Pita;
