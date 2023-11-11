// App.js
import React, { useState } from 'react';
import { CartProvider } from './components/Cartcontent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { NotificationProvider } from './components/Notification';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import FruitsAndVegetables from './components/Fv';
import Logged from './components/Logged';
import Cart from './components/Cart';
import Beauty from './components/Beauty';
import Dairy from './components/Dp';
import HBeauty from './components/HBeauty';
import HFruitsAndVegetables from './components/HFv';
import HDairy from './components/HDp';
import Homecare from './components/Homecare';
import HHomecare from './components/HHomecare';
import Staples from './components/Staples';
import HStaples from './components/HStaples';
import Admin from './components/Admin';
import Inventory from './components/Inventory';
import Product from './components/Product';
import Employee from './components/Employees';

const App = () => {
  // Sample product data for demonstration
  const [products, setProducts] = useState([
    // Beauty products
    { id: 1, department: 'Beauty', name: 'GARNIER Skinactive BB Cream', price: 'Rs. 250', stock: 50 },
    { id: 2, department: 'Beauty', name: 'MAMAEARTH Compact Powder', price: 'Rs. 50', stock: 30 },
    { id: 3, department: 'Beauty', name: 'PLUM Concealer', price: 'Rs. 50', stock: 40 },
    { id: 4, department: 'Beauty', name: 'SENSAI Eyeliner', price: 'Rs. 100', stock: 25 },
    { id: 5, department: 'Beauty', name: 'LAKME Foundation', price: 'Rs. 50', stock: 35 },
    { id: 6, department: 'Beauty', name: 'LAKME Kajal', price: 'Rs. 90', stock: 20 },
    { id: 7, department: 'Beauty', name: 'MAMAEARTH Lipstick', price: 'Rs. 20', stock: 15 },
    { id: 8, department: 'Beauty', name: 'NIVEA Lipbalm', price: 'Rs. 40', stock: 30 },
    { id: 9, department: 'Beauty', name: 'SUGAR Masscara', price: 'Rs. 75', stock: 40 },
    { id: 10, department: 'Beauty', name: 'MAMAEARTH Vit C Moisturizer', price: 'Rs. 60', stock: 25 },
    { id: 11, department: 'Beauty', name: 'PLUM Primer', price: 'Rs. 45', stock: 35 },
    { id: 12, department: 'Beauty', name: 'Dr. SHETH Sunscreen', price: 'Rs. 50', stock: 30 },

    // Dairy products
    { id: 13, department: 'Dairy', name: 'AMUL Butter', price: 'Rs. 250', stock: 40 },
    { id: 14, department: 'Dairy', name: 'AMUL Cheese Slices', price: 'Rs. 50', stock: 25 },
    { id: 15, department: 'Dairy', name: 'GO Cheese Squares', price: 'Rs. 50', stock: 35 },
    { id: 16, department: 'Dairy', name: 'AMUL Fresh Cream', price: 'Rs. 100', stock: 20 },
    { id: 17, department: 'Dairy', name: 'HATSUN Curd', price: 'Rs. 50', stock: 30 },
    { id: 18, department: 'Dairy', name: 'AMUL Lassi', price: 'Rs. 90', stock: 15 },
    { id: 19, department: 'Dairy', name: 'AMUL Masti', price: 'Rs. 20', stock: 25 },
    { id: 20, department: 'Dairy', name: 'AMUL TAAZA Toned Milk', price: 'Rs. 40', stock: 30 },
    { id: 21, department: 'Dairy', name: 'NESTLE Milkmaid', price: 'Rs. 75', stock: 40 },
    { id: 22, department: 'Dairy', name: 'HERITAGE Paneer', price: 'Rs. 60', stock: 20 },
    { id: 23, department: 'Dairy', name: 'AMUL Whipping Cream', price: 'Rs. 45', stock: 35 },
    { id: 24, department: 'Dairy', name: 'EPIGAMIA Yogurt', price: 'Rs. 50', stock: 30 },

    // Fruits & Vegetables products
    { id: 25, department: 'Fruits & Vegetables', name: 'Apple(1 kg)', price: 'Rs. 250', stock: 60 },
    { id: 26, department: 'Fruits & Vegetables', name: 'Banana(pack of 12)', price: 'Rs. 50', stock: 45 },
    { id: 27, department: 'Fruits & Vegetables', name: 'Carrot(1 kg)', price: 'Rs. 50', stock: 55 },
    { id: 28, department: 'Fruits & Vegetables', name: 'Strawberries(500g)', price: 'Rs. 100', stock: 30 },
    { id: 29, department: 'Fruits & Vegetables', name: 'Broccoli(500g)', price: 'Rs. 50', stock: 40 },
    { id: 30, department: 'Fruits & Vegetables', name: 'Grapes(1 kg)', price: 'Rs. 90', stock: 25 },
    { id: 31, department: 'Fruits & Vegetables', name: 'Tomato(1kg)', price: 'Rs. 20', stock: 35 },
    { id: 32, department: 'Fruits & Vegetables', name: 'Cucumber(1 kg)', price: 'Rs. 40', stock: 30 },
    { id: 33, department: 'Fruits & Vegetables', name: 'Orange(1 kg)', price: 'Rs. 75', stock: 40 },
    { id: 34, department: 'Fruits & Vegetables', name: 'Cabbage(1 kg)', price: 'Rs. 60', stock: 20 },
    { id: 35, department: 'Fruits & Vegetables', name: 'Potato(1 kg)', price: 'Rs. 45', stock: 35 },
    { id: 36, department: 'Fruits & Vegetables', name: 'Watermelon(1 kg)', price: 'Rs. 50', stock: 30 },

    // Homecare products
    { id: 37, department: 'Homecare', name: 'ORAL-B Toothbrush', price: 'Rs. 250', stock: 20 },
    { id: 38, department: 'Homecare', name: 'DOVE Shampoo', price: 'Rs. 50', stock: 35 },
    { id: 39, department: 'Homecare', name: 'HIMALAYA Facewash', price: 'Rs. 50', stock: 25 },
    { id: 40, department: 'Homecare', name: 'HARPIC', price: 'Rs. 100', stock: 30 },
    { id: 41, department: 'Homecare', name: 'SURF EXCEL Liquid', price: 'Rs. 50', stock: 40 },
    { id: 42, department: 'Homecare', name: 'LIZOL', price: 'Rs. 90', stock: 15 },
    { id: 43, department: 'Homecare', name: 'PARACHUTE Hair Oil', price: 'Rs. 20', stock: 25 },
    { id: 44, department: 'Homecare', name: 'COLGATE Tooth Paste', price: 'Rs. 40', stock: 30 },
    { id: 45, department: 'Homecare', name: 'YARDLEY Perfume', price: 'Rs. 75', stock: 40 },
    { id: 46, department: 'Homecare', name: 'CINTHOL', price: 'Rs. 60', stock: 20 },
    { id: 47, department: 'Homecare', name: 'SURF EXCEL Soap', price: 'Rs. 45', stock: 35 },
    { id: 48, department: 'Homecare', name: 'VIM Liquid', price: 'Rs. 50', stock: 30 },

    // Staples products
    { id: 49, department: 'Staples', name: 'AASHIRVAD AATA(1 kg)', price: 'Rs. 250', stock: 55 },
    { id: 50, department: 'Staples', name: 'CHANNA(1 kg)', price: 'Rs. 50', stock: 50 },
    { id: 51, department: 'Staples', name: 'FRIED GRAM(1 kg)', price: 'Rs. 50', stock: 40 },
    { id: 52, department: 'Staples', name: 'GRB GHEE(500 g)', price: 'Rs. 100', stock: 30 },
    { id: 53, department: 'Staples', name: 'FORTUNE Sunflower Oil(1l)', price: 'Rs. 50', stock: 35 },
    { id: 54, department: 'Staples', name: 'DHEEPAM OIL(1l)', price: 'Rs. 90', stock: 25 },
    { id: 55, department: 'Staples', name: 'INDIA GATE Basmati Rice(1kg)', price: 'Rs. 120', stock: 45 },
    { id: 56, department: 'Staples', name: 'TATA Salt(1 kg)', price: 'Rs. 40', stock: 30 },
    { id: 57, department: 'Staples', name: 'SUGAR(1 kg)', price: 'Rs. 75', stock: 40 },
    { id: 58, department: 'Staples', name: 'RED CHILLI(1 kg)', price: 'Rs. 60', stock: 20 },
    { id: 59, department: 'Staples', name: 'TOOR DAL(1 kg)', price: 'Rs. 145', stock: 35 },
    { id: 60, department: 'Staples', name: 'URAD DAL(1 kg)', price: 'Rs. 150', stock: 30 },
  ]);


  // Use state to manage the cart
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <CartProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logged-in" element={<Logged />} />
              <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
              <Route
                path="/FruitsAndVegetables"
                element={<FruitsAndVegetables />}
              />
              <Route
                path="/HFruitsAndVegetables"
                element={<HFruitsAndVegetables/>}
              />
              <Route path='/Beauty' element={<Beauty />} />
              <Route path='/HBeauty' element={<HBeauty />} />
              <Route path='/Dp' element={<Dairy />} />
              <Route path='/HDp' element={<HDairy />} />
              <Route path='/Homecare' element={<Homecare />} />
              <Route path='/HHomecare' element={<HHomecare />} />
              <Route path='/Staples' element={<Staples />} />
              <Route path='/HStaples' element={<HStaples />} />
              <Route path='/admin' element={<Admin />} />
              <Route path="/inventory" element={<Inventory productsData={products} setProductsData={setProducts} />} />
              <Route path="/product" element={<Product products={products} setProducts={setProducts} />} />

             <Route path="/employee" element={<Employee />} />;
            </Routes>
          </div>
          </CartProvider>
    </Router>
  );
};

export default App;
