import React, { useState } from 'react';  
import './Bio.css';

function Bio() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <div className='Bio'>
            <div className='container'>
                <p className='bio-label'>profile</p>

                <div className={`row ${expanded ? 'expand' : ''}`} onClick={toggleExpand}>
                    <div className='col'>
                        <img 
                            src={require('./assets/originalImage.jpg')} 
                            className="bio-image" 
                            alt="profile picture" 
                        />
                    </div>

                    {expanded && (
                        <>
                            <div className="text-circle circle1">
                                <b>About Me</b> <br></br> 
                                Hi, I'm a soon to be University of Airzona graduate in Tucson, Arizona. I've lived here in the desert
                                for a over 20 years and am excited to explore and experience post graduation and build upon the skills and knowledge
                                I've gained from college. I love to read, connect with people, and travel. 
                            </div>
                            <div className="text-circle circle2">
                            As for my work, I believe I've chosen the 
                                perfect sector of expertise in the fact that technology forces one to coninuously learn new and improved techniques to 
                                stay on the edge of modern tech solutions. I've always found satisfaction in discovering new fun, interesting information 
                                I can use down the line in my career and watch my projects improve alongside modern improvments.
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bio;
