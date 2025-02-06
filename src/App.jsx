import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabase = createClient(
  'https://uiwcnsuuyvptwxfuwrrg.supabase.co', // Your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpd2Nuc3V1eXZwdHd4ZnV3cnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNjE4ODMsImV4cCI6MjA1MzczNzg4M30.pA6_w6OpBVad3k-_bro6RFLd8d77K8pDY3sgoEBe22c' // Your Supabase API key
);

// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1.',
    price: 19.99,
    image: 'https://via.placeholder.com/200', // Placeholder image
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2.',
    price: 29.99,
    image: 'https://via.placeholder.com/200', // Placeholder image
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the description for product 3.',
    price: 39.99,
    image: 'https://via.placeholder.com/200', // Placeholder image
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For registration
  const [confirmPassword, setConfirmPassword] = useState(''); // For registration confirmation password

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Handle Login with Supabase Authentication
  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      setLoggedIn(true);
    }
  };

  // Handle Register with Supabase Authentication
  const handleRegister = async (e) => {
    e.preventDefault();
    // Simple validation: check if passwords match
    if (name && email && password === confirmPassword) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {
        setLoggedIn(true); // Successful registration
      }
    } else {
      alert("Passwords do not match or fields are missing.");
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLoggedIn(false); // Logout the user
  };

  return (
    <div className="App">
      {/* Header with Cart Info */}
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between">
          <h1>LittleStores E-Commerce</h1>
          <div className="cart-info">
            <p>Cart: {cart.length} items</p>
          </div>
        </div>
      </header>

      {/* Main Content (Products + Cart Summary) */}
      <main className="container py-5">
        <div className="row">
          {/* Product Listings */}
          <div className="col-md-8">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
              {products.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <div className="card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text text-success">${product.price}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="col-md-4">
            <h2 className="text-center mb-4">Your Cart</h2>
            <div className="card">
              <div className="card-body">
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul className="list-group">
                    {cart.map((item, index) => (
                      <li className="list-group-item" key={index}>
                        {item.name} - ${item.price}
                      </li>
                    ))}
                  </ul>
                )}
                {cart.length > 0 && (
                  <div className="text-center mt-3">
                    <button className="btn btn-success">Proceed to Checkout</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Login/Register Section */}
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <h3 className="text-center mb-4">{loggedIn ? 'Welcome Back!' : isRegistering ? 'Register' : 'Login'}</h3>
            
            {loggedIn ? (
              <div className="text-center">
                <p>You are logged in.</p>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="card">
                <div className="card-body">
                  {isRegistering ? (
                    // Registration Form
                    <form onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Register
                      </button>
                    </form>
                  ) : (
                    // Login Form
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Log In
                      </button>
                    </form>
                  )}
                </div>
                <div className="card-footer text-center">
                  {isRegistering ? (
                    <p>
                      Already have an account?{' '}
                      <a href="#" onClick={() => setIsRegistering(false)}>
                        Login here
                      </a>
                    </p>
                  ) : (
                    <p>
                      Don't have an account?{' '}
                      <a href="#" onClick={() => setIsRegistering(true)}>
                        Register here
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p>&copy; 2025 LittleStores. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
