import React from 'react';
import podushka from '../../img/podushka.svg'

const Component1 = () => {
   return (
      <div className="background">
                <img className="podushka" src={podushka} alt=""/>
                <div className="text1">
                    <p class="new">new</p>
                    <p class="spring">Spring Cushion Collection 2019</p>
                    <a href="">buy new</a>
                </div>
        </div>
   );
}

export default Component1;


