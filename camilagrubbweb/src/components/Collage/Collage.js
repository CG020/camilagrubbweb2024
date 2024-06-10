import React from 'react';  
import './Collage.css';

function Collage() {
    return (
        <div className='Collage'>
            <p className='bio-label'>bio</p>
            <div className="collage-container">
                <div className="panel edu">
                    <span className="hidden-text">
                        I'm currently in my Senior Year pursuing my Bachelor's of Science at the
                        University of Arizona. I am minoring in Business Administration at the Eller
                        College of Business and earned my certificate in general Cybersecurity at UA South.
                        
                    </span>
                    education
                </div>
                <div className="panel internship">
                    <span className="hidden-text">
                        I have experience in working on collaborative research and data analysis from ongoing work at the Banner Medical
                        Center under the University of Arizona. I am involved in the R25 ADVANCE renal research internship at UA where 
                        I work with several UA students on various experiments involving research on technology and its uses in the medical field.
                        My previous work in internships that are now completed are recorded in my documents.

                    </span>
                    internships</div>
                <div className="panel involve">
                <span className="hidden-text">
                        Angel Heart is a Southern Arizona Based volunteer group that helps children have access to clothes, books, toys, and dependable volunteers there to help them grow and thrive.
                        I have been lucky enough to volunteer for Pajama Project events including
                        those that take place around the holidays where I get a chance to meet kids looking for a safe place to learn.
                        I've met lots of good people and it is a great honor to work among my fellow Tucsonans to better the community.

                    </span>
                    involvement</div>
                <div className="panel docs">
                <span className="hidden-text">
                    <embed src="file:///C:/Users/Gmill/Downloads/CamilaGrubbCV2024Updated%20(1).pdf" width="300" height="375" 
                    type="CV/pdf"></embed>
                    </span>
                    
                    documents</div>
            </div>
        </div>
    );
}

export default Collage;