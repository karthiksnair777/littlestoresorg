import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

function Locator() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div className="d-flex flex-column flex-lg-row align-items-start justify-content-center gap-4 w-100" style={{ maxWidth: '1100px' }}>
        
        {/* Location Selector Card */}
        <Card className="p-4 text-center glass-card w-100">
          <h4 className="mb-4 text-success">Select Your Location</h4>

          <Form.Select
            value={selectedLocation}
            onChange={handleChange}
            className="mb-4"
          >
            <option value="">Choose your area</option>
            <option value="Calicut">Calicut</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
          </Form.Select>

          <div className="map-container mb-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.017768108329!2d75.78041!3d11.258753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c1b015e3c7f%3A0xbbbfb8015351a34b!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1613897645104!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {selectedLocation === "Calicut" && (
            <Link to="/store">
              <Button variant="success">
                Visit Store
              </Button>
            </Link>
          )}
        </Card>

        {/* Show shop only if Calicut is selected */}
        {selectedLocation === "Calicut" && (
          <Card className="p-4 text-start shadow shop-card w-100">
            <h5 className="text-success">Achu's Store</h5>
            <p className="mb-2">📍 Located in Calicut</p>
            <p>🛒 Fresh groceries, quick delivery, and best rates in town!</p>
            <Link to="/inventory" className="btn btn-success">Visit Store</Link>
          </Card>
        )}
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          min-width: 300px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .shop-card {
          background-color: #fff;
          border-radius: 20px;
          min-width: 300px;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .glass-card, .shop-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Locator;
