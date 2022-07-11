import React from 'react';
import './Projects.scss';
import { useParallax } from 'react-scroll-parallax';

export const Projects =() => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotateY: [0, 360],
  // });
    return (
      <div className="projects frame">
        <div className="projects__list">
          <div className="projects__list--item">Project1</div>
          <div className="projects__list--item">Project2</div>
          <div className="projects__list--item">Project3</div>
        </div>
      </div>
      
    
    );
  }
