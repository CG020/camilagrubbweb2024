import React from 'react';  
import './Collage.css';

function Collage() {
    return (
        <div className='Collage'>
            <p className='bio-label'>bio</p>
            <div className="collage-container">
                <div className="panel edu">
                    <span className="hidden-text">
                        I'm currently in my Senior Year pursuing my Bcahelor's of Science at the
                        University of Arizona. I am minoring in Business Administration at teh Eller
                        College of Business and earned by certificate in general Cybersecurity at UA South.
                        
                    </span>
                    education
                </div>
                <div className="panel internship">internships</div>
                <div className="panel involve">involvement</div>
                <div className="panel docs">documents</div>
            </div>
        </div>
    );
}

export default Collage;