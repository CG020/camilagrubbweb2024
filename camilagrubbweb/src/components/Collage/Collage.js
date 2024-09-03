import React from 'react';  
import './Collage.css';

function Collage() {
    return (
        <div className='Collage'>
            <p className='bio-label'>bio</p>
            <div className="collage-container">
                <div className="panel edu">
                    <span className="hidden-text">
                        - Bachelor's of Science Senior at the University of Arizona. <br></br>
                        - Minoring in Business Administration at the Eller College of Business. <br></br>
                        - Earned certificate in General Cybersecurity at UA South.
                        
                    </span>
                    education
                </div>
                <div className="panel internship">
                    <span className="hidden-text">
                        - Collaborative research and data analysis from ongoing work at the Banner Medical
                        Center under the University of Arizona. <br></br>
                        - R25 ADVANCE Renal Research Summer internships at UA. Studying applications of medical technology.<br></br> 
                        - UA Design Labs Internship. Partnered with APEX Applied Technologies, designed a software based solution to 
                        involvement issue.
                    </span>
                    internships</div>
                <div className="panel involve">
                <span className="hidden-text">
                        Angel Heart is a Southern Arizona Based volunteer group that helps children have access to clothes, books, toys, and dependable volunteers.
                        I volunteer for Pajama Project events including holidays special events where I meet kids looking for a safe place to learn.
                    </span>
                    involvement</div>
                <div className="panel docs">
                <span className="hidden-text">
                    <div>
                        <object width="500" height="400" data={require('./assets/CamilaGrubbCV2024.pdf')} type="application/pdf">   </object>
                    </div>
                    </span>
                    
                    documents</div>
            </div>
        </div>
    );
}

export default Collage;