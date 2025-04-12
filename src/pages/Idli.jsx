import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Idli() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const navigate = useNavigate();

  const handleAddToCart = () => {
    alert(`Added ${quantity} Idli(s) to cart!`);
  };

  const handleBuyNow = () => {
    navigate("/buynow");
  };

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-6 mb-4">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-400,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/28e35241-6a2d-4ba4-b8a7-96d0ff68410d.jpeg"
              alt="Idli"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="fw-bold">Steamed Idli</h2>

            {/* Star Rating */}
            <div className="mb-2 text-warning fs-5">
              ★★★★☆ <span className="text-muted fs-6">(120 reviews)</span>
            </div>

            <p className="text-muted">
              Traditional South Indian rice cakes – soft, fluffy, and served hot with chutney & sambar.
              A healthy and light meal option to fuel your day.
            </p>

            <h4 className="text-success">₹40 / plate</h4>

            {/* Availability */}
            <p className="text-success fw-semibold">✔ In Stock</p>
            <p className="text-muted small">Delivery in: <strong>10-15 min</strong> in select areas</p>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mt-3 mb-4">
              <label className="me-2 fw-semibold">Quantity:</label>
              <input
                type="number"
                min="1"
                className="form-control w-25"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            {/* Action Buttons */}
            <button onClick={handleAddToCart} className="btn btn-outline-success me-2">
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="btn btn-success">
              Buy Now
            </button>
          </div>
        </div>

        {/* Tabbed Section */}
        <div className="row mt-5">
          <div className="col">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            {activeTab === "description" ? (
              <div>
                <h5 className="fw-bold">Why You'll Love It</h5>
                <p>
                  Our Idlis are made with freshly fermented batter and steamed to perfection.
                  Perfectly paired with coconut chutney and spicy sambar, they make an ideal breakfast or snack.
                  Great for all age groups – light, low-calorie, and packed with flavor.
                </p>
              </div>
            ) : (
              <div>
                <h5 className="fw-bold">Customer Reviews</h5>
                <div className="border rounded p-3 mb-2 bg-light">
                  <strong>Priya S</strong> – ★★★★★<br />
                  “Absolutely delicious and so soft! Love the chutney too.”
                </div>
                <div className="border rounded p-3 mb-2 bg-light">
                  <strong>Rahul M</strong> – ★★★★☆<br />
                  “Good portion size and very fresh. Will order again.”
                </div>
                <p className="text-muted">* More reviews coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Idli;
