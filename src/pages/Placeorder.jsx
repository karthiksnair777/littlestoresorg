import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

function Placeorder() {
  const navigate = useNavigate();

  useEffect(() => {
    const newOrder = {
      id: Date.now(),
      store: "Fresh Mart",
      user: "Alice",
      items: ["Steamed Idli (x1)"],
      amount: 36,
      payment: "Cash on Delivery",
      status: "Pending",
    };

    // Get existing orders from cookies
    const existing = Cookies.get("orders");
    const orders = existing ? JSON.parse(existing) : [];

    // Add the new order
    orders.push(newOrder);

    // Save back to cookie
    Cookies.set("orders", JSON.stringify(orders), { expires: 7 });
  }, []); // Run only once when the component mounts

  return (
    <>
      <Header />

      <div className="container py-5 text-center">
        <div className="card shadow-lg p-5 border-0 rounded-4">
          <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
            <CheckCircle size={40} className="text-success" />
            <h2 className="fw-bold m-0">Order Placed Successfully!</h2>
          </div>

          <p className="text-muted mb-4">
            Thank you for your order. Your food is being prepared and will be delivered shortly.
          </p>

          <div className="bg-light rounded-4 p-4 mb-4 text-start">
            <h5 className="fw-semibold mb-3">Order Summary</h5>
            <p className="mb-1">Item: <strong>Steamed Idli (x1)</strong></p>
            <p className="mb-1">Total Amount: <strong>₹36</strong></p>
            <p className="mb-1">Payment Mode: <strong>Cash on Delivery</strong></p>
            <p className="text-success mt-2">Estimated Delivery: 25-30 mins</p>
          </div>

          <button
            className="btn btn-outline-primary px-4 py-2 rounded-pill"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Placeorder;
