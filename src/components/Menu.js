import React from 'react';
import bibimbap from '../img/bibimbap.jpg'

const Menu = () => {
    const banner = {
        backgroundImage: `url(${bibimbap})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '400px',
        width: '100%'
    }

    return (
        <div className="section-container menu">
            <div className="menu-banner" style={banner}></div>
            <h1 className="section-header menu-header text-center kodchasan-5">Our Menu</h1>
        </div>
    )
}

export default Menu