import React from 'react';

const burrito = [
  {
    name: 'Chicken',
    price: 8.75
  },
  {
    name: 'Beef',
    price: 9.75
  },
  {
    name: 'Pork',
    price: "8.50"
  },
  {
    name: 'Vegetable',
    price: "8.50"
  },
]

const Burrito = () =>
  <div className="burrito">
     <h3 className="item-header">Burrito</h3>
     {burrito.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default Burrito;
