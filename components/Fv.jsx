import React, { useState } from 'react';
import './Homepage.css';
import { Card, Container, Button } from 'react-bootstrap';
import './Fv.css';
// import { useCart } from './CartContext';

import apple from '../img/fv/apple.jpg';
import banana from '../img/fv/banana.jpg';
import carrot from '../img/fv/carrot.jpg';
import strawberries from '../img/fv/sb.jpg';
import broccoli from '../img/fv/bro.jpg';
import grapes from '../img/fv/grapes.jpg';
import tomato from '../img/fv/tomato.jpg';
import cucumber from '../img/fv/cucu.jpg';
import orange from '../img/fv/orange.jpg';
import cab from '../img/fv/cab.jpg';
import potato from '../img/fv/potato.jpg';
import watermelon from '../img/fv/water.jpg';

function FruitsAndVegetables() {
  const fruitsAndVegetablesData = [
    {
      id: 1,
      name: 'Apple(1 kg)',
      image: apple,
      price: 'Rs. 250',
    },
    {
      id: 2,
      name: 'Banana(pack of 12)',
      image: banana,
      price: 'Rs. 50',
    },
    {
      id: 3,
      name: 'Carrot(1 kg)',
      image: carrot,
      price: 'Rs. 50',
    },
    {
      id: 4,
      name: 'Strawberries(500g)',
      image: strawberries,
      price: 'Rs. 100',
    },
    {
      id: 5,
      name: 'Broccoli(500g)',
      image: broccoli,
      price: 'Rs. 50',
    },
    {
      id: 6,
      name: 'Grapes(1 kg)',
      image: grapes,
      price: 'Rs. 90',
    },
    {
      id: 7,
      name: 'Tomato(1kg)',
      image: tomato,
      price: 'Rs. 20',
    },
    {
      id: 8,
      name: 'Cucumber(1 kg)',
      image: cucumber,
      price: 'Rs. 40',
    },
    {
      id: 9,
      name: 'Orange(1 kg)',
      image: orange,
      price: 'Rs. 75',
    },
    {
      id: 10,
      name: 'Cabbage(1 kg)',
      image: cab,
      price: 'Rs. 60',
    },
    {
      id: 11,
      name: 'Potato(1 kg)',
      image: potato,
      price: 'Rs. 45',
    },
    {
      id: 12,
      name: 'Watermelon(1 kg)',
      image: watermelon,
      price: 'Rs. 50',
    },
  ];

  // Define cart and functions to handle quantity
  const [cart, setCart] = useState({});

  const handleDecrement = (itemId) => {
    // Implement the logic to decrement item quantity in the cart
    const updatedCart = { ...cart };
    if (updatedCart[itemId] > 0) {
      updatedCart[itemId]--;
      setCart(updatedCart);
    }
  };

  const handleIncrement = (itemId) => {
    // Implement the logic to increment item quantity in the cart
    const updatedCart = { ...cart };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCart(updatedCart);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Welcome to GROCIFY</h1>
          <br></br>
          <p>Discover Fresh and Quality Products</p>
        </div>
      </section>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/logged-in">Home</a>
            </li>
            <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/FruitsAndVegetables">Fruits & Vegetables</a>
            </li>
            <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/Dp">Dairy products</a>
            </li>
            <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/Staples">Staples</a>
            </li>
            <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/Homecare">Home & Personal care</a>
            </li>
            <li className='navbar-item'>|</li>
            <div className="navbar-separator"></div>
            <li className="navbar-item">
              <a href="/Beauty">Beauty</a>
            </li>
                        <li className='navbar-item'>|</li>
            <li className="navbar-item">
              <a href="/Cart" className="cart-button">Cart</a> {/* Add this link to the cart */}
            </li>
            <li className='navbar-item'>|</li>
            <li className="navbar-item">
              <a href="/profile" className="profile-button">Profile</a> {/* Add this link to the profile */}
            </li>
            <li className='navbar-item'>|</li>
            <li className="navbar-item">
              <a href="/" className="logout-button">Logout</a> {/* Add this link to the profile */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Card Section */}
      <section className="card-section">
        <Container>
          <div className="card-container">
            {fruitsAndVegetablesData.map((item) => (
              <div className="square-card" key={item.id}>
                <div className="card-image image-container">
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <div className="quantity-selector">
                    <Button variant="outline-primary" onClick={() => handleDecrement(item.id)}>
                      -
                    </Button>
                    <span className="quantity">{cart[item.id] || 0}</span>
                    <Button variant="outline-primary" onClick={() => handleIncrement(item.id)}>
                      +
                    </Button>
                  </div>
                  <Button variant="primary">Add to Cart</Button>
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

export default FruitsAndVegetables;
