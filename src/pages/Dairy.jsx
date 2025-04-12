import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const products = [
  {
    name: "iD Idli & Dosa Batter",
    quantity: "2 kg",
    price: "₹165",
    image: "https://cdn.zeptonow.com/production/tr:w-400,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/28e35241-6a2d-4ba4-b8a7-96d0ff68410d.jpeg",
    link: "/Idli",
  },
  {
    name: "Eggoz Fresh White Eggs",
    quantity: "30 Pieces",
    price: "₹338",
    image: "https://cdn.zeptonow.com/production/tr:w-400,ar-2500-2500,pr-true,f-auto,q-80/cms/product_variant/044a0893-3136-416a-978b-36da192b4443.jpeg",
  },
  {
    name: "Modern Wheat Bread",
    quantity: "400g",
    price: "₹60",
    image: "https://cdn.zeptonow.com/production/tr:w-400,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/db861d74-0ecb-4f56-82dc-5857f87bc80e.jpeg",
  },
];

function Dairy() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mt-4 fw-bold">Top Dairy, Bread & Eggs</h1>

      {/* Search */}
<div className="row mb-4">
  <div className="col-md-4 ms-auto">
    <input
      type="text"
      className="form-control"
      placeholder="Search by product name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>

        {/* Card Container */}
        <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-start">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div className="col" key={idx}>
                <Link
                  className="text-decoration-none text-dark"
                  to={product.link || "#"}
                >
                  <Card
                    className="shadow-sm border-0 p-2"
                    style={{
                      transition: "all 0.3s ease-in-out",
                      borderRadius: "8px",
                      maxWidth: "12rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.2)";
                      e.currentTarget.style.border = "2px solid #007bff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.border = "none";
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      style={{ height: "100px", objectFit: "contain" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">{product.name}</Card.Title>
                      <p className="fw-bold small">{product.quantity}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <Card.Text className="fw-bold mb-0 small">{product.price}</Card.Text>
                        <button className="btn btn-outline-success btn-sm">Add</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-muted text-center">No matching products found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dairy;
