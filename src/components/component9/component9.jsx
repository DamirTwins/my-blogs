import React from 'react';
import house from '../../img/house.svg'
import car from '../../img/car.svg'
import class1 from '../../img/class.svg'

const Component9 = () => {
   return (
      <div className="footer">
      <div className="house">
        <img src={house} alt="" />
        <p className="safe">Safe shopping</p>
        <p className="sell">Buy with confidence</p>
      </div>
      <div className="bigcar">
        <img src={car} alt="" />
        <p className="safe">Fast shipping</p>
        <p className="sell">Get your product fast</p>
      </div>
      <div className="class">
        <img src={class1} alt="" />
        <p className="safe">Satisfaction guarantee</p>
        <p className="sell">Or get your money back</p>
      </div>
    </div>
   );
};

export default Component9;