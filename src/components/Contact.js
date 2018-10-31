import React from 'react';
import bowl from '../img/bowl.jpg'

const Contact = () => {
    const banner = {
        backgroundImage: `url(${bowl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '400px',
        width: '100%'
    }

    return (
        <div className="section-container contact">
            <div className="contact-banner" style={banner}>
                <div className="banner-tint h-100 w-100"></div>
            </div>
            <h1 className="section-header contact-header text-center kodchasan-5">Contact</h1>
        </div>
    )
}

export default Contact