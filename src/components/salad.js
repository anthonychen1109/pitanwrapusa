import React from 'react';

const salad = [
  {
    name: 'Salad',
    price: 6.95
  },
  {
    name: 'Salad With Chicken',
    price: 7.95
  },
]

const Salad = () =>
  <div className="salad">
     <h3 className="item-header">Salad</h3>
     {salad.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default Salad;
