import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Homepage.css';
import { Container, Card } from 'react-bootstrap';
import DraggableImageCarousel from './Drag';

function Logged() {
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
              <a href="/">Home</a>
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

      <section className="offers">
  <div className="offers-container">
    <div className="draggable-offers">
      <DraggableImageCarousel />
    </div>
  </div>
</section>

 {/* Customer Testimonials Section */}
<section className="testimonials">
  <div className="testimonials-container">
    <h2>What Our Customers Say</h2>
    <Container>
      <div className="feedback-card-container">
        {/* Feedback 1 */}
        <Card className="feedback-card">
          <Card.Body className="feedback-card-body">
            <Card.Title className="feedback-card-title">Happy Customer</Card.Title>
            <Card.Text className="feedback-card-text">
              GROCIFY has made my grocery shopping experience a breeze. The intuitive website, fresh products, and prompt delivery have won me over. I highly recommend it to everyone!
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Feedback 2 */}
        <Card className="feedback-card">
          <Card.Body className="feedback-card-body">
            <Card.Title className="feedback-card-title">Impressed Shopper</Card.Title>
            <Card.Text className="feedback-card-text">
              I'm thoroughly impressed with the quality of products and the wide range of options available on GROCIFY. The easy navigation and quick checkout make it my go-to online supermarket.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Feedback 3 */}
        <Card className="feedback-card">
          <Card.Body className="feedback-card-body">
            <Card.Title className="feedback-card-title">Excellent Service</Card.Title>
            <Card.Text className="feedback-card-text">
              The GROCIFY team provides excellent service! The website is user-friendly, the delivery is always on time, and the products are fresh. It's a delight to shop here.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  </div>
</section>
<footer className="footer">
  <div className="footer-social">
    <h3>Connect with Us</h3>
    <ul>
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </li>
    </ul>
  </div>
  <div className="footer-container">
    <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
  </div>
</footer>

</div>
  );
}


export default Logged;
