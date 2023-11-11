import React from 'react';
import './Homepage.css';
import { Card, Container } from 'react-bootstrap';
import './Fv.css';

import butter from '../img/dairy/butter.jpg';
import chee from '../img/dairy/chee.jpg';
import cheese from '../img/dairy/cheese.jpg';
import cream from '../img/dairy/cream.jpg';
import curd from '../img/dairy/curd.jpg';
import lassi from '../img/dairy/lassi.jpg';
import masti from '../img/dairy/masti.jpg';
import milk from '../img/dairy/milk.jpg';
import mm from '../img/dairy/mm.jpg';
import paneer from '../img/dairy/paneer.jpg';
import whip from '../img/dairy/whip.jpg';
import yogurt from '../img/dairy/yogurt.jpg';

function HDairy() {
  const hdiaryData = [
    {
      id: 1,
      name: 'AMUL Butter',
      image: butter,
      price: 'Rs. 250',
    },
    {
      id: 2,
      name: 'AMUL Cheese Slices',
      image: chee,
      price: 'Rs. 50',
    },
    {
      id: 3,
      name: 'GO Cheese Squares',
      image: cheese,
      price: 'Rs. 50',
    },
    {
      id: 4,
      name: 'AMUL Fresh Cream',
      image: cream,
      price: 'Rs. 100',
    },
    {
      id: 5,
      name: 'HATSUN Curd',
      image: curd,
      price: 'Rs. 50',
    },
    {
      id: 6,
      name: 'AMUL Lassi',
      image: lassi,
      price: 'Rs. 90',
    },
    {
      id: 7,
      name: 'AMUL Masti',
      image: masti,
      price: 'Rs. 20',
    },
    {
      id: 8,
      name: 'AMUL TAAZA Toned Milk',
      image: milk,
      price: 'Rs. 40',
    },
    {
      id: 9,
      name: 'NESTLE Milkmaid',
      image: mm,
      price: 'Rs. 75',
    },
    {
      id: 10,
      name: 'HERITAGE Paneer',
      image: paneer,
      price: 'Rs. 60',
    },
    {
      id: 11,
      name: 'AMUL Whipping Cream',
      image: whip,
      price: 'Rs. 45',
    },
    {
      id: 12,
      name: 'EPIGAMIA Yogurt',
      image: yogurt,
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
                        { hdiaryData.map((item) => (
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

export default HDairy;
