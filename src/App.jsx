import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Inventory from './pages/Inventory';
import Dairy from './pages/Dairy';
 import Fruits from './pages/Fruits';
 import Idli from './pages/Idli';
 import Admin from './pages/Admin';
import Store from './pages/Store';
import Locator from './pages/Locator';
import Buynow from './pages/Buynow';
import Placeorder from './pages/Placeorder'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/idli" element={<Idli />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/locator" element={<Locator />} />
        <Route path="/store" element={<Store />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/placeorder" element={<Placeorder />} />

      </Routes>
    </Router>
  );
}

export default App;