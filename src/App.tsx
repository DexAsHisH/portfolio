import React from 'react';
import './App.scss';

import { About , Projects, Home, Tech } from './views';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";



function App() {
 
  return (
    <div className="background">
      <div className='header'>

        about
        contact me

      </div>

      <div className='main-container'>
        

        <div className='container frame scroll-hidden'>
        

          <Home/>
          <About/>
          <Tech/>
          <Projects/>

        </div>


      </div>

    </div>
      
  );
}

export default App;
