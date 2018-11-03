import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = { navOpen: false};
        this.navOpen = this.navOpen.bind(this);
    }

    navOpen = () => {

        this.setState({
            navOpen: true
        });
    }
    
    render() {
        return (
            <div>
                <nav className="navigation text-center d-none d-lg-flex flex-column align-items-center justify-content-between">
                    <div>
                        <a href="/" className="brand kodchasan-7 text-uppercase">Seoul Food.</a>
                        <p className="brand-tagline text-right font-italic kodchasan-5">Taste Korea</p>
                        <div className="underline"></div>
                    </div>
                    <ul className="link-list">
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><NavLink to="/about" className="link">About</NavLink></li>
                        <li><NavLink to="/menu" className="link">Menu</NavLink></li>
                        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
                    </ul>
                    <p className="copyright kodchasan-5">Copyright &copy; Seoul Food. 2018</p>
                </nav>

                <nav className="mobile-navigation text-center d-flex align-items-center justify-content-between d-lg-none">
                    <div className="brand-container">
                        <a href="/" className="brand kodchasan-7 text-uppercase">Seoul Food.</a>
                        <p className="brand-tagline text-right font-italic kodchasan-5">Taste Korea</p>
                        <div className="underline"></div>
                    </div>
                    <button className="btn nav-toggle-btn" onClick={this.navOpen}>Click</button>
                </nav>


                { 
                    this.state.navOpen ? (               
                        <div className="mobile-menu">
                            <p>hey dere</p>
                        </div>
                    ) : (
                        null
                    ) 
                }
            </div>
        )
    }
}

export default withRouter(Navbar)