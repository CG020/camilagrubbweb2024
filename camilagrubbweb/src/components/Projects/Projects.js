import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div>
            <p className='bio-label'>Projects</p>

            <p className='projects-text'>
                A showcase of projects I am currently working on and completed with. <br />
                All project source code is found on Github under CG020.
            </p>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-panel panel-red">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Project 1</h5>
                                <p>Placeholder for Project 1 description.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-panel panel-green">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Project 2</h5>
                                <p>Placeholder for Project 2 description.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-panel panel-blue">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Project 3</h5>
                                <p>Placeholder for Project 3 description.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Projects;
