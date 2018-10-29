import React from 'react';
import chefs from '../img/chefs.jpg'

const About = () => {
    const banner = {
        backgroundImage: `url(${chefs})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '400px',
        width: '100%'
    }

    return (
        <div className="section-container about">
            <div className="about-banner" style={banner}>
                <div className="tint h-100 w-100"></div>
            </div>
            <h1 className="section-header about-header text-center kodchasan-5">About Us</h1>
        </div>
    )
}

export default About