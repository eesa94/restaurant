import React from 'react';
import chefs from '../img/chefs.jpg'
import Footer from './Footer'

const About = () => {
    const banner = {
        backgroundImage: `url(${chefs})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '400px',
        width: '100%'
    }

    return (
        <div className="section-container about">
            <div className="about-banner" style={banner}>
                <div className="banner-tint h-100 w-100"></div>
            </div>
            <h1 className="section-header about-header text-center kodchasan-5">About Us</h1>

            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Our Story</h2>
                <div className="header-underline"></div>
                <div className="row no-gutters">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2">
                        <p className="kodchasan-3">Seoul Food. was borne out of a passion for high-quality, authentic Korean cuisine. Noticing the popularity of East Asian establishments among the local populace, we wanted to bring another option to the table for local diners to satisfy their palate.</p>
                        <p className="kodchasan-3">Whether you are a seasoned veteran of the Korean BBQ, or you want to try Korean food for the first time, we have a wide range of dishes on offer which we are sure you will love!</p>
                        <p className="kodchasan-3">Why not check out our menu and see what takes your fancy?</p>
                    </div>
                </div>
            </div>
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Taste Korea</h2>
                <div className="header-underline"></div>
                <div className="row no-gutters">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2">
                        <p className="kodchasan-3">We like to keep things simple but effective.</p>
                        <p className="kodchasan-3">
                        <span className="brand-tagline font-italic kodchasan-5">Taste Korea</span> is our motto. The entire Seoul Food. brand is centered around providing the most authentic taste of Korea that we possibly can. Everything from our ingredients to the restaurant environment is carefully designed to ensure that customers enjoy their experience.
                        </p>
                        <p className="kodchasan-3">Check out our
                            <a href="/menu" className="menu-link"> menu </a>  
                        to see how you can get your taste of Korea.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About