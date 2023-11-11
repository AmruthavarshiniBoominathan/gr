// AddToCartPage.jsx
import React, { useState } from 'react';
import './Homepage.css';
import './Cart.css';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  { id: 4, name: 'Product 4', price: 120 },
];

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
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
      
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - Rs. {product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>

        <div className="selected-product">
          <h2>Selected Products</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - Quantity: {item.quantity} - Rs. {item.price * item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="total-price">
            Total Price: Rs. {calculateTotalPrice()}
          </div>

          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
