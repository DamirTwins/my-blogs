import React from 'react';
import aboutme from "../../img/aboutme.svg"
import products from "../../img/products.svg"
import contact from "../../img/contact.svg"

const Component3 = () => {
   return (
      <div className="profile">
        <div className="backcolor1">
          <img src={aboutme} alt="" />
          <p className="about">About me</p>
          <p className="learn">Learn more</p>
        </div>
        <div className="backcolor2">
          <img src={products} alt="" />
          <p className="about">My products</p>
          <p className="learn">Learn more</p>
        </div>
        <div className="backcolor3">
          <img src={contact} alt="" />
          <p className="about">Contact me</p>
          <p className="learn">Learn more</p>
        </div>
      </div>
   );
}

export default Component3;