import React from 'react';
import bibimbap from '../img/bibimbap.jpg'
import Footer from './Footer'

const Menu = () => {
    const banner = {
        backgroundImage: `url(${bibimbap})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '400px',
        width: '100%'
    }

    return (
        <div className="section-container menu">
            <div className="menu-banner" style={banner}>
                <div className="banner-tint h-100 w-100"></div>
            </div>
            <h1 className="section-header text-center kodchasan-5">Our Menu</h1>

            {/* Appetisers */}
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Appetisers</h2>
                <div className="header-underline"></div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Shrimp Tempura</strong></p>
                        <p className="dish-desc">Shrimp dipped in Tempura batter</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£4.95</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Pan-Fried Dumplings</strong></p>
                        <p className="dish-desc">Korean dumplings, pan-fried and filled with vegetables</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£3.50</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Chicken Wings</strong></p>
                        <p className="dish-desc">Korean-style spicy wings</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£4.95</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Kimchi Noodle Soup</strong></p>
                        <p className="dish-desc">Classic Kimchi with Udon noodle soup</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£4.95</p>
                    </div>
                </div>
            </div>

            {/* Noodles */}
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Noodles</h2>
                <div className="header-underline"></div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Spicy Cold Noodles</strong></p>
                        <p className="dish-desc">Sweet and sour spicy noodles topped with cucumber, radish, and boiled egg</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£8.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Japchae</strong></p>
                        <p className="dish-desc">Vermicelli noodles, sauteed with seasoned spinach, mushroom, carrot, onion, marinated beef</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£8.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Spicy Fish Noodles</strong></p>
                        <p className="dish-desc">Sweet and sour spicy noodles topped with marinated skate fish, cucumber, radish, and boiled egg</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£10.99</p>
                    </div>
                </div>
            </div>

            {/* Barbecue */}
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Korean BBQ</h2>
                <div className="header-underline"></div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Beef Bulgogi</strong></p>
                        <p className="dish-desc">Tender beef slices marinated in our special sauce</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£12.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Chicken Bulgogi</strong></p>
                        <p className="dish-desc">Tender chicken strips marinated in our special sauce</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£10.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Spicy Chicken Bulgogi</strong></p>
                        <p className="dish-desc">Tender chicken breast marinated in a spicy sauce</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£10.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Galbi</strong></p>
                        <p className="dish-desc">Korean-style beef ribs marinated in traditional sauce</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£14.99</p>
                    </div>
                </div>
            </div>

            {/* Specials */}
            <div className="component-section">
                <h2 className="sub-header kodchasan-7">Specials</h2>
                <div className="header-underline"></div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Bibimbap</strong></p>
                        <p className="dish-desc">Tender beef slices served with rice, carrot, spinach, radish, sprouts, and fried egg</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£8.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Kimchi Fried Rice</strong></p>
                        <p className="dish-desc">Traditional Korean Kimchi served with fried rice and egg</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£7.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Kimchi Stew</strong></p>
                        <p className="dish-desc">Kimchi served with tofu, chilli pepper, onion</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£8.99</p>
                    </div>
                </div>
                <div className="row menu-row no-gutters">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-3">
                        <p className="dish-name kodchasan-3"><strong>Dumpling Soup</strong></p>
                        <p className="dish-desc">Ox bone broth, served with Korean dumplings, tender beef slices, egg, onion, and seaweed</p>
                    </div>
                    <div className="col-lg-1">
                        <p className="dish-price">£9.99</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Menu