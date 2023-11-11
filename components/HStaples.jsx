import React from 'react';
import './Homepage.css';
import { Card, Container } from 'react-bootstrap';
import './Fv.css';


import aata from '../img/staples/aata.jpg';
import channa from '../img/staples/channa.jpg';
import fried from '../img/staples/fried.jpg';
import ghee from '../img/staples/ghee.jpg';
import oil from '../img/staples/oil.jpg';
import pooja from '../img/staples/pooja.jpg';
import red from '../img/staples/red.jpg';
import rice from '../img/staples/rice.jpg';
import salt from '../img/staples/salt.jpg';
import sugar from '../img/staples/sugar.jpg';
import toor from '../img/staples/toor.jpg';
import urad from '../img/staples/urad.jpg';

function HStaples() {
  const hstaplesData = [
    {
      id: 1,
      name: 'AASHIRVAD AATA(1 kg)',
      image: aata,
      price: 'Rs. 250',
    },
    {
      id: 2,
      name: 'CHANNA(1 kg)',
      image: channa,
      price: 'Rs. 50',
    },
    {
      id: 3,
      name: 'FRIED GRAM(1 kg)',
      image: fried,
      price: 'Rs. 50',
    },
    {
      id: 4,
      name: 'GRB GHEE(500 g)',
      image: ghee,
      price: 'Rs. 100',
    },
    {
      id: 5,
      name: 'FORTUNE Sunflower Oil(1l)',
      image: oil,
      price: 'Rs. 50',
    },
    {
      id: 6,
      name: 'DHEEPAM OIL(1l)',
      image: pooja,
      price: 'Rs. 90',
    },
    {
      id: 7,
      name: 'INDIA GATE Basmati Rice(1kg)',
      image: rice,
      price: 'Rs. 120',
    },
    {
      id: 8,
      name: 'TATA Salt(1 kg)',
      image: salt,
      price: 'Rs. 40',
    },
    {
      id: 9,
      name: 'SUGAR(1 kg)',
      image: sugar,
      price: 'Rs. 75',
    },
    {
      id: 10,
      name: 'RED CHILLI(1 kg)',
      image: red,
      price: 'Rs. 60',
    },
    {
      id: 11,
      name: 'TOOR DAL(1 kg)',
      image: toor,
      price: 'Rs. 145',
    },
    {
      id: 12,
      name: 'URAD DAL(1 kg)',
      image: urad,
      price: 'Rs. 150',
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
                        {hstaplesData.map((item) => (
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

export default HStaples;
