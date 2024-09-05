import React from 'react';
import './Collage.css';

function Collage() {
    return (
        <div className='Collage'>
            <p className='bio-label'>bio</p>
            <div className="collage-container">
                <div className="panel edu">
                    <span className="hidden-text">
                        I am a Senior pursuing my Bachelor's of Science in Computer Science at the University of Arizona.
                        I am minoring in Business Administration at the Eller College of Management. I also earned my certificate
                        in General Cybersecurity.
                    </span>
                    education
                </div>
                <div className="panel internship">
                    <span className="hidden-text">
                        I have held a longstading research position at the Banner Medical Center at the University of Arizona. I work 
                        in a collaborative setting where I perform data analysis on a team for several medical technology projects. 
                        My team and I write flexible Python scripts and manage repositories for churning out data and visualizations
                        for publications on new biomedical technologies we are testing and/or exploring. <br></br> <br></br>
                        
                        I interned for the R25 ADVANCE Renal Research Summer internship at UA in the summers of 2023 and 2024. Where I studyied applications of medical technology, milimeter wave radar technology 
                        in particular, where I lead of team of student researchers in conducting experiment trials, analysis, and research paper creation.<br></br> <br></br>

                        I also interned at UA Design Labs. Partnered with APEX Applied Technologies, my team and I designed a software-based solution to an 
                        involvement issue APEX presented Design Labs with. I designed a plan of action for the company on the most probable involvement techniques for succes, 
                        what resources are available to make a website and how its layout and design will be universally accesible, and how funding would be feasible. This experience
                        involved project managemnt skills and networking for clear expectations of what was the desired end product and staying connected the entire pathway.
                    </span>
                    internships
                </div>
                <div className="panel involve">
                    <span className="hidden-text">
                        Angel Heart is a Southern Arizona Based volunteer group that helps children have access to clothes, books, toys, and dependable volunteers.
                        I volunteer for Pajama Project events including holidays special events where I meet kids looking for a safe place to learn and help run fun activities.
                    </span>
                    involvement
                </div>
            </div>

            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Welcome</h5>
                <p className='card-text'> Explore my work further on <a href="www.linkedin.com/in/camila-grubb-8ab00b240">Linkedin
                </a> or contact me directly and connect with me via email @camilagrubb.gmail.com. <br></br> <br></br>
                As a recent graduate I am excited to apply my skills and expand my areas of expertise. I have experience working 
                as a student researcher working in data science and coursework in software engineering and machine learning.
                <br></br> <br></br>
                I'm excited to work with you! </p>
            </div>
            </div>
        </div>
    );
}

export default Collage;
