import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";

function Dairy() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mt-4 fw-bold">Top Fruits and Vegetables</h1>

        {/* Card Container */}
        <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-start">
          
          {/* Card 1 */}
          <div className="col">
            <Card
              className="shadow-sm border-0 p-2"
              style={{
                transition: "all 0.3s ease-in-out",
                borderRadius: "8px",
                maxWidth: "12rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.border = "2px solid #007bff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.border = "none";
              }}
            >
              <Card.Img
                variant="top" 
                src="https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/f35152f8-31b1-4450-ae76-fe0f8893005a.jpeg"
                alt="Product Image"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6">Banana Robusta</Card.Title>
                <p className="fw-bold small">4 piece</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fw-bold mb-0 small">₹48</Card.Text>
                  <button className="btn btn-outline-success btn-sm">Add</button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col">
            <Card
              className="shadow-sm border-0 p-2"
              style={{
                transition: "all 0.3s ease-in-out",
                borderRadius: "8px",
                maxWidth: "12rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.border = "2px solid #007bff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.border = "none";
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/d684d49f-850e-4c4a-bed3-2f5ec4ba9c3c.jpeg"
                alt="Product Image"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6">Watermelon Kiran</Card.Title>
                <p className="fw-bold small">1 Pieces</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fw-bold mb-0 small">₹109</Card.Text>
                  <button className="btn btn-outline-success btn-sm">Add</button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col">
            <Card
              className="shadow-sm border-0 p-2"
              style={{
                transition: "all 0.3s ease-in-out",
                borderRadius: "8px",
                maxWidth: "12rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.border = "2px solid #007bff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.border = "none";
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/4bdbf9f5-023b-4d38-a1c6-f8a37c73759a.jpeg"
                alt="Product Image"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6">Tender Coconut</Card.Title>
                <p className="fw-bold small">1 piece</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fw-bold mb-0 small">₹72</Card.Text>
                  <button className="btn btn-outline-success btn-sm">Add</button>
                </div>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dairy;
