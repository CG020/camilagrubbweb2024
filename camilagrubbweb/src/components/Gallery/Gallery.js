import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <div>
            <p className='bio-label'>gallery</p>

            <p className='gallery-text'> - - <i>Some of my favorite photos from travelling the US I wanted to feature here 
                on my site.</i> - - </p>

            <div className="grid-container-wrapper">
                <div className="grid-container">
                    <div className="grid-item big">
                        <img src={require('./assets/penn1.jpeg')} alt="penn1" />
                        <div className="pin-location">
                            <img src={require('./assets/pin.png')} alt="Location Pin" />
                            <span>Philadelphia, Pennsylvania</span>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/penn2.jpeg')} alt="penn2" />
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/penn3.jpeg')} alt="penn3" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item big">
                        <img src={require('./assets/maine1.jpeg')} alt="maine1" />
                        <div className="pin-location">
                            <img src={require('./assets/pin.png')} alt="Location Pin" />
                            <span>Biddeford, Maine</span>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/maine2.jpeg')} alt="maine2" />
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/maine3.jpeg')} alt="maine3" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item big">
                        <img src={require('./assets/seattle3.jpeg')} alt="seattle3" />
                        <div className="pin-location">
                            <img src={require('./assets/pin.png')} alt="Location Pin" />
                            <span>Seattle, Washington</span>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/seattle1.jpeg')} alt="seattle1" />
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/seattle2.jpeg')} alt="seattle2" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item big">
                        <img src={require('./assets/sanfran1.jpeg')} alt="sanfran1" />
                        <div className="pin-location">
                            <img src={require('./assets/pin.png')} alt="Location Pin" />
                            <span>San Francisco, California</span>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/sanfran2.jpeg')} alt="sanfran2" />
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/sanfran3.jpeg')} alt="sanfran3" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item big">
                        <img src={require('./assets/sedona1.jpeg')} alt="sedona1" />
                        <div className="pin-location">
                            <img src={require('./assets/pin.png')} alt="Location Pin" />
                            <span>Sedona, Arizona</span>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/sedona2.jpeg')} alt="sedona2" />
                    </div>
                    <div className="grid-item small">
                        <img src={require('./assets/sedona3.jpeg')} alt="sedona3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
