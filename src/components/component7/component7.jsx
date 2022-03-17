import React from 'react';
import kreslo1 from '../../img/kreslo1.svg'
import kreslo2 from '../../img/kreslo2.svg'
import kreslo3 from '../../img/kreslo3.svg'

const Component7 = () => {
   return (
      <div className="kreslo">
         <div className="kreslo1">
         <img src={kreslo1} alt="" />
         <p className="tovar">Plated Cushion</p>
         <p className="price">$ 19.99 USD</p>
         </div>
         <div className="kreslo2">
         <img src={kreslo2} alt="" />
         <p className="tovar">Silver Cushion</p>
         <p className="price">$ 19.99 USD</p>
         </div>
         <div className="kreslo3">
         <img src={kreslo3} alt="" />
         <p className="tovar">Deep Blue Cushion</p>
         <p className="price">$ 19.99 USD</p>
         </div>
      </div>
   );
};

export default Component7;