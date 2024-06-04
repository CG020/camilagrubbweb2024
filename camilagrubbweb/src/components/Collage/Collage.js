import React from 'react';  
import './Collage.css';

function Collage() {
    return (
        <div className='Collage'>
            <p className='bio-label'>bio</p>
            <div className="collage-container">
                <div className="panel edu">education</div>
                <div className="panel internship">internships</div>
                <div className="panel involve">involvement</div>
                <div className="panel docs">documents</div>
            </div>
        </div>
    );
}

export default Collage;