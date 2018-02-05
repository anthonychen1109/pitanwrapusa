import React from 'react';

const bowl = [
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
]

const Bowl = () =>
  <div className="bowl">
     <h3 className="item-header">Bowl</h3>
     {bowl.map((item, index) => {
       return (
         <div key={item+index} className="grid animated fadeIn">
           <div>{item.name}</div>
           <div>{item.price}</div>
         </div>
       )
     }
     )}
   </div>

export default Bowl;
