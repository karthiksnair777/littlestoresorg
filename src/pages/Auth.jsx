import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import regImage from '../assets/reg.png';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

function Auth() {
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.username || userData.email || userData.password) {
      toast.success("Form submitted successfully (No backend attached)");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(isRegister ? "/login" : "/register");
      }, 1000);
    } else {
      toast.warning("Please fill all the fields");
    }
  };

  return (
    <div className="container mt-5 bg-">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card rounded-5 border-2 border-outline-success shadow">
            <div className="row g-0">
              <div className="col-md-6">
                <img 
                  src={regImage} 
                  alt="Login" 
                  className="img-fluid rounded-5" 
                  style={{ width: '100%', height: 'auto' }} 
                />
              </div>
              <div className="col-md-5 p-4">
                <h2 className='text-success'>ProjectFair</h2>
                <p className='text-success'>Please enter your details to continue.</p>
                <form onSubmit={handleSubmit}>
                  {isRegister && (
                    <div className="mb-3">
                      <input value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" className="form-control rounded-4" placeholder="Enter your username" />
                    </div>
                  )}
                  <div className="mb-3">
                    <input value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" className="form-control rounded-4" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <input value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" className="form-control rounded-4" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-success rounded-4 w-100">
                    {isRegister ? 'Sign up' : 'Sign in'}
                    {isLoading && <Spinner animation="border" size="sm" className="ms-2" />}
                  </button>
                </form>
                <p className="mt-3">
                  {isRegister ? "Already have an account? " : "Don't have an account? "}
                  <button className="btn btn-link text-success p-0" onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Login" : "Register"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Auth;
