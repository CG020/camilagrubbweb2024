import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Projects.css';

function Projects() {
  return (
    <div className="carousel-container"> {/* place */}
      <p className='bio-label'>projects</p>

      <p className='projects-text'>
        A showcase of projects I am currently working on and completed with. <br />
        All project source code is found on Github under CG020.
      </p>

      <Carousel>
        <Carousel.Item>
          <div className="carousel-panel panel-red">
            <div className="carousel-caption d-none d-md-block">
              <h5>Project 1</h5>
              <p>Placeholder for Project 1 description.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-panel panel-green">
            <div className="carousel-caption d-none d-md-block">
              <h5>Project 2</h5>
              <p>Placeholder for Project 2 description.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-panel panel-blue">
            <div className="carousel-caption d-none d-md-block">
              <h5>Project 3</h5>
              <p>Placeholder for Project 3 description.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
