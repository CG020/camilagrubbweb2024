import React from 'react';  
import './Bio.css';

function Bio() {
    return(
        <div className='Bio'>
            <div className='container'>
            <p className='bio-label'>profile</p>

            <div className='row'>
            <div className='col'>
                <img src={require('./assets/originalImage.jpg')} className="bio-image" alt="profile picture" />
            </div>
            <div className='col'>
                <p className='bio-text'> Explore my work further on <a href="www.linkedin.com/in/camila-grubb-8ab00b240">Linkedin
                </a> or contact me directly and connect with me via email @camilagrubb.gmail.com. <br></br> <br></br>
                As a recent graduate I am excited to apply my skills and expand my areas of expertise. I have experience working 
                as a student researcher working in data science and coursework in software engineering and machine learning.
                <br></br> <br></br>
                I'm excited to work with you! </p>
            </div>
            </div>

            </div>
        </div>
    );
}

export default Bio;