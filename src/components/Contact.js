import React from 'react';
import bowl from '../img/bowl.jpg'
import Footer from './Footer'

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

            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Any Questions?</h2>
                <div className="header-underline"></div>
                <div className="row no-gutters">
                    <div className="col-8 offset-2 col-lg-5 offset-lg-2 mb3">
                        <p className="kodchasan-7 mb3">Get in touch using the form below</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Phone Number</label>
                                <input type="text" className="form-control" id="number" aria-describedby="numberHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" style={{resize: "none"}}></textarea>  
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-submit kodchasan-5">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-8 offset-2 col-lg-3 offset-lg-2">
                        <p className="kodchasan-7 mb3">Phone or email us</p>
                        <p className="kodchasan-3">Tel: 0123456789</p>
                        <p className="kodchasan-3">Email: info@seoulfood.com</p>
                        
                    </div>
                </div>
            </div>

            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Location</h2>
                <div className="header-underline"></div>
                <div className="row no-gutters">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2">
                        <p className="kodchasan-3">Seoul Food is located off 123 Avenue, in downtown Restaurant City.</p>
                        <p className="kodchasan-3">You can find us at:</p>

                        <div className="address">
                            <p className="kodchasan-5 address">Number 32</p>
                            <p className="kodchasan-5 address">Restaurant Quarter</p>
                            <p className="kodchasan-5 address">SE10 FDD</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Opening Hours</h2>
                <div className="header-underline"></div>
                <div className="row no-gutters">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2">
                        <p className="kodchasan-3">We are open 7 days a week, 11am - 10pm</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact