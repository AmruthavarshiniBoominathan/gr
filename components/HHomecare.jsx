import React from 'react';
import './Homepage.css';
import { Card, Container } from 'react-bootstrap';
import './Fv.css';

import brush from '../img/homecare/brush.jpg';
import dove from '../img/homecare/dove.jpg';
import facewash from '../img/homecare/facewash.jpg';
import harpic from '../img/homecare/harpic.jpg';
import liq from '../img/homecare/liq.jpg';
import lizol from '../img/homecare/lizol.jpg';
import oil from '../img/homecare/oil.jpg';
import paste from '../img/homecare/paste.jpg';
import perfume from '../img/homecare/perfume.jpg';
import soap from '../img/homecare/soap.jpg';
import tsoap from '../img/homecare/tsoap.jpg';
import vim from '../img/homecare/vim.jpg';

function HHomecare() {
  const hhomecareData = [
    {
      id: 1,
      name: 'ORAL-B Toothbrush',
      image: brush,
      price: 'Rs. 250',
    },
    {
      id: 2,
      name: 'DOVE Shampoo',
      image: dove,
      price: 'Rs. 50',
    },
    {
      id: 3,
      name: 'HIMALAYA Facewash',
      image: facewash,
      price: 'Rs. 50',
    },
    {
      id: 4,
      name: 'HARPIC',
      image: harpic,
      price: 'Rs. 100',
    },
    {
      id: 5,
      name: 'SURF EXCEL Liquid',
      image: liq,
      price: 'Rs. 50',
    },
    {
      id: 6,
      name: 'LIZOL',
      image: lizol,
      price: 'Rs. 90',
    },
    {
      id: 7,
      name: 'PARACHUTE Hair Oil',
      image: oil,
      price: 'Rs. 20',
    },
    {
      id: 8,
      name: 'COLGATE Tooth Paste',
      image: paste,
      price: 'Rs. 40',
    },
    {
      id: 9,
      name: 'YARDLEY Perfume',
      image: perfume,
      price: 'Rs. 75',
    },
    {
      id: 10,
      name: 'CINTHOL',
      image: soap,
      price: 'Rs. 60',
    },
    {
      id: 11,
      name: 'SURF EXCEL Soap',
      image: tsoap,
      price: 'Rs. 45',
    },
    {
      id: 12,
      name: 'VIM Liquid',
      image: vim,
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
                        {hhomecareData.map((item) => (
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

export default HHomecare;
