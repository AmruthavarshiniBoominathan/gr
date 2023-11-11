import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import axios from 'axios';

const EmployeeCard = ({ employee, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedEmployee({ ...employee });
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/employees/${editedEmployee.id}`,
        editedEmployee
      );
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <>
          <h3>
            <input
              type="text"
              name="name"
              value={editedEmployee.name}
              onChange={handleChange}
            />
          </h3>
          <p>
            <strong>Position:</strong>
            <input
              type="text"
              name="position"
              value={editedEmployee.position}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Shift:</strong>
            <input
              type="text"
              name="shift"
              value={editedEmployee.shift}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Salary:</strong>
            <input
              type="number"
              name="salary"
              value={editedEmployee.salary}
              onChange={handleChange}
            />
          </p>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Shift:</strong> {employee.shift}
          </p>
          <p>
            <strong>Salary:</strong> {employee.salary}
          </p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(employee.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    shift: '',
    salary: 0,
  });

  useEffect(() => {
    // Fetch employees from the backend when the component mounts
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error.message);
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/employees/add-employee', formData);
      setEmployees([...employees, response.data]);
      setFormData({
        name: '',
        position: '',
        shift: '',
        salary: 0,
      });
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/employees/${employeeId}`);
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) => (employee.id === updatedEmployee.id ? updatedEmployee : employee))
    );
  };

  return (
    <div className="admin-page">
      <div className="main-content">
        <section className="hero">
          <div className="hero-container">
            <h1>Welcome to GROCIFY</h1>
            <br />
            <p>Discover Fresh and Quality Products</p>
          </div>
        </section>

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
              <Link to="/employees">Employees</Link>
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

        <div className="employee-container">
          <div className="employee-content">
            <h2 className="employee-heading">Employee Management</h2>

            <div className="employee-card-container">
              {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} onDelete={handleDelete} onUpdate={handleUpdate} />
              ))}
            </div>

            <form className="employee-form" onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>

              <label>
                Position:
                <input type="text" name="position" value={formData.position} onChange={handleChange} />
              </label>

              <label>
                Shift:
                <input type="text" name="shift" value={formData.shift} onChange={handleChange} />
              </label>

              <label>
                Salary:
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
              </label>

              <button type="submit">Add Employee</button>
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
  );
};

export default Employee;
