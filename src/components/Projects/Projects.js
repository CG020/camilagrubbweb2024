import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Projects.css';

function Projects() {
  return (
    <div>
        <p className='bio-label'>projects</p>

        <div className="carousel-container">
            <p className='projects-text'>
                A showcase of projects I am currently working on and completed with. <br />
                All project source code is found on Github under <a href='https://github.com/CG020'>CG020.</a>
            </p>

            <Carousel>
                <Carousel.Item>
                    <div className="carousel-panel panel-web">
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>Personal Website</b></h5>
                            <p>This digital portfolio you're seeing. I created this site from scratch 
                    using Reactjs, HTML, CSS, and JavaScript for showcasing my work. I was methodical in its creation making an organized,
                    well structured React project so as to make updates with ease each time I expand my portfolio. <i>Repo: camilagrubb2024</i></p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-panel panel-edu">
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>Edu_Searcher</b></h5>
                            <p>[IN PROGRESS] The edu_searcher is a project I began outside of class as a fast, intuitive tool to 
                                scour the web for free, accessible education on any subject the user searches. I wanted a tool I could use to filter 
                                and search the web for open source content if I wanted to learn a new quick skill or interesting topic. I'm still working on 
                                connecting to as many information source APIs as I can to build its growing sources. <i>Repo: edu_searcher</i>
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-panel panel-space">
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>Space Invaders</b></h5>
                            <p>A team project for college course CSC 335, web development. This was a near semester 
                                long project undertaken by myself and three group members to recreate the game Space Invaders in 
                                Java and JavaFX with special creative features. We employed the Scrum framework. <i>Repo: Space_Invaders</i>
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-panel panel-radar">
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>MMWave Radar</b></h5>
                            <p>A repo I created from the spurce code if the Texas Instruments milimter wave toolkit to manage
                                and visualize the real time data capture outputted from the IWR6843AOPEVM MCBOOST radar board for the purpose
                                of running and experimenting with the Vital Signs lab for my ACABI. <i>Repo: mmWave
                            </i>
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <br></br> <br></br>
        </div>
    </div>
  );
}

export default Projects;
