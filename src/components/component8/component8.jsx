import React from 'react';
import kreslo4 from '../../img/kreslo4.svg'
import kreslo5 from '../../img/kreslo5.svg'
import kreslo6 from '../../img/kreslo6.svg'

const Component8 = () => {
   return (
      <div className="kreslosecond">
      <div className="kreslo4">
        <img src={kreslo4} alt="" />
        <p className="tovar">Pink Cushion</p>
        <p className="price">$ 19.99 USD</p>
      </div>
      <div className="kreslo5">
        <img src={kreslo5} alt="" />
        <p className="tovar">Black Cushion</p>
        <p className="price">$ 19.99 USD</p>
      </div>
      <div className="kreslo6">
        <img src={kreslo6} alt="" />
        <p className="tovar">Green Cushion</p>
        <p className="price">$ 19.99 USD</p>
      </div>
    </div>
   );
};

export default Component8;