import React from "react";
import logo from '../../img/logo.svg'
import korzina from "../../img/korzina.svg"

const Header = () => {
   return (
      <header class="header">
            <div>
            <img className="logo" src={logo} alt="" />
            </div>
                <nav class="nav">
                    <ul>
                        <li> <a href="1">Home</a></li>
                        <li> <a href="1">About</a></li>
                        <li> <a href="1">Products</a></li>
                        <li> <a href="1">Contact me</a></li>
                    </ul>
                </nav>
            <img class="korzina" src={korzina} alt="" />
        </header>
   );
}

export default Header;

