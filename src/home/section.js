import React from 'react';

import img_1 from "../home/img/1.png";
import img_2 from "../home/img/2.png";

const section = () =>{
  return (
    <div id="About_Us" className='UP-sec'>
      <div className='sec child-1'>
        <div>
            <img src={img_1} />
        </div>
        
        <div className="article">
          <h3>We pride ourselves on making real food from the best ingredients.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam et purus a odio finibus bibendum in sit amet leo. 
            Mauris feugiat erat mmm
          </p>
          <button className='btn btn-primary'>lern more</button>
        </div>
      </div>
        

        
        <div className='sec child-2'>
          <div className="article">
            <h3>We pride ourselves on making real food from the best ingredients.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam et purus a odio finibus bibendum in sit amet leo. 
              Mauris feugiat erat tellus.
            </p>
            <button className='btn btn-primary'>lern more</button>
          </div>
          <div>
              <img src={img_2} />
          </div>
        </div>
    </div>
)}


export default section ;