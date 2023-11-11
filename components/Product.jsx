// Import necessary modules and styles
import './Product.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';

const Product = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [updateProduct, setUpdateProduct] = useState({
    id: null,
    department: '',
    name: '',
    price: '',
    stock: 0,
  });

  const filteredProducts = products.filter((product) => {
    const includes =
      product && product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return includes;
  });

  const handleDeleteProduct = async (productId) => {
    try {
      // Make a DELETE request to delete the product
      await axios.delete(`http://localhost:8080/api/v1/inventory/delete-product/${productId}`);
      console.log(`Product with ID ${productId} deleted`);

      // Update the product catalog in App.js
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/inventory/update-product/${updateProduct.id}`,
        updateProduct,
        {
          headers: {
            Authorization: `Bearer YOUR_AUTH_TOKEN`, // Replace with your actual token
            // Add other headers if needed
          },
        }
      );

      console.log(response.data);

      // Update the product catalog in App.js
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === response.data.id ? response.data : product
        )
      );

      // Reset the form
      setUpdateProduct({
        id: null,
        department: '',
        name: '',
        price: '',
        stock: 0,
      });
    } catch (error) {
      console.error('Error updating product:', error.message);
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

        {/* Search Bar */}
        <Form className="search-bar">
          <Form.Control
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(`Search Term: ${e.target.value}`);
            }}
          />
        </Form>

        {/* Display Filtered Products as Cards */}
        <div className="product-cards">
          {filteredProducts.map((product) => (
            <Card key={`${product.id}-${product.name}`} className="procard">
              {/* Updated class name to "procard" */}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {product.id}
                  <br />
                  <strong>Department:</strong> {product.department}
                  <br />
                  <strong>Price:</strong> {product.price}
                  <br />
                  <strong>Stock Available:</strong> {product.stock}
                </Card.Text>
                <button onClick={() => setUpdateProduct(product)}>Update</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Update Form */}
        {updateProduct.id && (
          <div className="update-form">
            <h3>Update Product</h3>
            <label>
              Department:
              <input
                type="text"
                name="department"
                value={updateProduct.department}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, department: e.target.value })
                }
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updateProduct.name}
                onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={updateProduct.price}
                onChange={(e) => setUpdateProduct({ ...updateProduct, price: e.target.value })}
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                name="stock"
                value={updateProduct.stock}
                onChange={(e) => setUpdateProduct({ ...updateProduct, stock: e.target.value })}
              />
            </label>
            <button onClick={handleUpdateProduct}>Update Product</button>
          </div>
        )}

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Product;
