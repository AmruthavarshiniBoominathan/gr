// Admin.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { Card, Button } from 'react-bootstrap';
import './Admin.css';
function Admin() {
    return (
        <div className="admin-page">

            {/* Main Content Section */}
            <div className="main-content">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-container">
                        <h1>Welcome to GROCIFY</h1>
                        <br></br>
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
                            <a href="/" className="logout-button">Logout</a>
                        </li>
                    </ul>
                </aside>
                <div className='whole'>

                <div className="admin-home">
                    <h2>Employee of the Month Awards</h2>
                 </div>
                    <div className="card-container-admin">
                        {/* Best Manager Card */}
                        <Card>
                            <Card.Header>Best Manager</Card.Header>
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>
                                    John Doe has demonstrated exceptional leadership and managerial skills throughout the month. His dedication and hard work have significantly contributed to the success of our projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Youth Employee Card */}
                        <Card>
                            <Card.Header>Youth Employee</Card.Header>
                            <Card.Body>
                                <Card.Title>Jane Smith</Card.Title>
                                <Card.Text>
                                    Jane Smith, our talented youth employee, has shown remarkable enthusiasm and innovation in her work. Her fresh ideas and commitment have made a positive impact on our team.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Active Employee Card */}
                        <Card>
                            <Card.Header>Active Employee</Card.Header>
                            <Card.Body>
                                <Card.Title>Mike Johnson</Card.Title>
                                <Card.Text>
                                    Mike Johnson's consistent hard work and dedication make him our Active Employee of the Month. His positive attitude and commitment to excellence set a great example for the entire team.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                
                </div>
                {/* Footer Section */}
                <footer className="footer">
                    <div className="footer-container">
                        <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Admin;
