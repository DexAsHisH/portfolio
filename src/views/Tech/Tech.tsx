import React from 'react';
import './Tech.scss';
import reactlogo from '../../images/reactlogo.png';
import awslogo from '../../images/awslogo.png';
import pythonlogo from '../../images/pythonlogo.png';

export const Tech =() => {

 return(

        <div className='tech frame2'>
          <div className='skills'> Skills</div>

          <div className='content'>
            <div className='react logo'>
              <img src={reactlogo}/>
            </div>
            <div className='python logo'>
              <img src={pythonlogo}/>
            </div>
            <div className='AWS logo'>
              <img src={awslogo}/>
            </div>
          </div>
          
          
  

        </div>


      
      
    
    );
  }