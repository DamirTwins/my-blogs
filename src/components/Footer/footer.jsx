import React from 'react';
import logo2 from '../../img/logo2.svg'

const Footer = () => {
   return (
      <footer className="footer2">
        <div>
          <img className="logo2" src={logo2} alt="" />
        </div>
        <nav className="nav2">
          <ul>
            <li> <a href={1}>Home</a></li>
            <li> <a href={1}>About</a></li>
            <li> <a href={1}>Products</a></li>
            <li> <a href={1}>Contact me</a></li>
          </ul>
        </nav>
      </footer>
   );
};

export default Footer;