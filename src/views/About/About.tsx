import React from 'react';
import './About.scss';
import { useParallax } from 'react-scroll-parallax';

export const About =() => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotateY: [0, 360],
  // });
    return (
        
      <div className="main frame bg-red">
        <div className='topology frame'>

          <div className='about'> About me</div>
          <div className='about2'>Know me more</div>

          <div className='bottom'>
              <div className='email'>
                <div className='bottomStyle'>email:</div>
                <div>ashishdabral2014@gmail.com</div>
                
              </div>
              <div className='contact2'>
                <div className='bottomStyle'>contact:</div>
                <div>7302238176</div>
              </div>
            </div>

          <div className='details'> 
            <div className='rightPart'>
              <div className='innerText heading'>Hi,I'm <span>Ashish Dabral</span></div>
              <div className='innerText'>i'm a developer, with a passion for programming. Loves to contribute in open-source, consistently ready to learn more.</div>
            </div>
            <div className='leftPart'></div>
        
          </div>
          

        </div>
        </div>
      
    
    );
  }
