import React from 'react';
import './Homepage.css';
import { Card, Container } from 'react-bootstrap';
import './Fv.css';

import bbcream from '../img/beauty/bbcream.jpg';
import compact from '../img/beauty/compact.jpg';
import concealer from '../img/beauty/concealer.jpg';
import eyeliner from '../img/beauty/eyeliner.jpg';
import foundation from '../img/beauty/foundation.jpg';
import kajal from '../img/beauty/kajal.jpg';
import lipbalm from '../img/beauty/lipbalm.jpg';
import lipstick from '../img/beauty/lipstick.jpg';
import mascara from '../img/beauty/mascara.jpg';
import moist from '../img/beauty/moist.jpg';
import primer from '../img/beauty/primer.jpg';
import sunscreen from '../img/beauty/sunscreen.jpg';

function HBeauty() {
    const beautyData = [
        {
            id: 1,
            name: 'GARNIER Skinactive BB Cream',
            image: bbcream,
            price: 'Rs. 250',
        },
        {
            id: 2,
            name: 'MAMAEARTH Compact Powder',
            image: compact,
            price: 'Rs. 50',
        },
        {
            id: 3,
            name: 'PLUM Concealer',
            image: concealer,
            price: 'Rs. 50',
        },
        {
            id: 4,
            name: 'SENSAI Eyeliner',
            image: eyeliner,
            price: 'Rs. 100',
        },
        {
            id: 5,
            name: 'LAKME Foundation',
            image: foundation,
            price: 'Rs. 50',
        },
        {
            id: 6,
            name: 'LAKME Kajal',
            image: kajal,
            price: 'Rs. 90',
        },
        {
            id: 7,
            name: 'MAMAEARTH Lipstick',
            image: lipstick,
            price: 'Rs. 20',
        },
        {
            id: 8,
            name: 'NIVEA Lipbalm',
            image: lipbalm,
            price: 'Rs. 40',
        },
        {
            id: 9,
            name: 'SUGAR Masscara',
            image: mascara,
            price: 'Rs. 75',
        },
        {
            id: 10,
            name: 'MAMAEARTH Vit C Moisturizer',
            image: moist,
            price: 'Rs. 60',
        },
        {
            id: 11,
            name: 'PLUM Primer',
            image: primer,
            price: 'Rs. 45',
        },
        {
            id: 12,
            name: 'Dr. SHETH Sunscreen',
            image: sunscreen,
            price: 'Rs. 50',
        },
    ];

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-container">
                    <h1>Welcome to GROCIFY</h1>
                    <br />
                    <p>Discover Fresh and Quality Products</p>
                </div>
            </section>
            {/* Navbar Section */}
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <a href="/">Home</a>
                        </li>
                        <li className='navbar-item'>|</li>
                        <div className="navbar-separator"></div>
                        <li className="navbar-item">
                            <a href="/HFruitsAndVegetables">Fruits & Vegetables</a>
                        </li>
                        <li className='navbar-item'>|</li>
                        <div className="navbar-separator"></div>
                        <li className="navbar-item">
                            <a href="/HDp">Dairy products</a>
                        </li>
                        <li className='navbar-item'>|</li>
                        <div className="navbar-separator"></div>
                        <li className="navbar-item">
                            <a href="/HStaples">Staples</a>
                        </li>
                        <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/HHomecare">Home & Personal care</a>
            </li>
                        <li className='navbar-item'>|</li>
                        <div className="navbar-separator"></div>
                        <li className="navbar-item">
                            <a href="/HBeauty">Beauty</a>
                        </li>
                        <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="login-item">
              <a href="/login" className="login-button">Login</a> {/* Add this login link */}
            </li>
                    </ul>
                </div>
            </nav>

            {/* Card Section */}
            <section className="card-section">
                <Container>
                    <div className="card-container">
                        {beautyData.map((item) => (
                            <div className="square-card" key={item.id}>
                                <div className="card-image image-container">
                                    <Card.Img variant="top" src={item.image} alt={item.name} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>Price: {item.price}</Card.Text>
                                </Card.Body>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default HBeauty;
