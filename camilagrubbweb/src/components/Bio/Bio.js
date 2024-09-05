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
            </div>

            </div>
        </div>
    );
}

export default Bio;