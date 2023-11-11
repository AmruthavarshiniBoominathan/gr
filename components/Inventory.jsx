import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Inventory = ({ productsData, setProductsData }) => {
  const [newProduct, setNewProduct] = useState({
    id: uuidv4(),
    department: '',
    name: '',
    price: '',
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add a new product
      const response = await axios.post('http://localhost:8080/api/v1/inventory/add-product', newProduct);
      console.log(response.data); // Log the response from the backend

      // Update the product catalog in App.js
      setProductsData((prevProductsData) => [...prevProductsData, response.data]);

      // Reset the form
      setNewProduct({
        id: uuidv4(),
        department: '',
        name: '',
        price: '',
        stock: 0,
      });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };


  return (
    <div className="admin-page">
      {/* Main Content Section */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <h1>Welcome to GROCIFY</h1>
            <br />
            <p>Discover Fresh and Quality Products</p>
          </div>
        </section>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <Link to="/admin">Home</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/inventory">Inventory Management</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/product">Product Catalogue</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/employee">Employees</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/customers">Customers</Link>
            </li>
            <li className="sidebar-item">
              <a href="/" className="logout-button">
                Logout
              </a>
            </li>
          </ul>
        </aside>

        <div>
          <h2>Inventory Management</h2>
          <div className="product-card">
            <div className="product-card-body">
              <form onSubmit={handleAddProduct}>
                <h3>Add a new product to inventory</h3>
                <label>
                  Department:
                  <input type="text" name="department" value={newProduct.department} onChange={handleChange} />
                </label>
                <label>
                  Name:
                  <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
                </label>
                <label>
                  Price:
                  <input type="text" name="price" value={newProduct.price} onChange={handleChange} />
                </label>
                <label>
                  Stock:
                  <input type="number" name="stock" value={newProduct.stock} onChange={handleChange} />
                </label>
                <button type="submit">Add Product</button>
              </form>
            </div>
          </div>
        </div>




        <div>
          <footer className="footer">
            <div className="footer-container">
              <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
