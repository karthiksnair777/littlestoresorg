import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Buynow() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const navigate = useNavigate();

  const originalPrice = 40;
  const deliveryCharge = 0;
  const discountedPrice = originalPrice - discount;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "idli10") {
      setDiscount(4); // 10% of ₹40
      setCouponApplied(true);
    } else {
      setDiscount(0);
      setCouponApplied(false);
      alert("Invalid Coupon Code");
    }
  };

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg rounded-4 border-0">
              <div className="card-body p-5">

                <h2 className="fw-bold mb-4 text-center">Checkout</h2>

                {/* Offer Banner */}
                <div className="alert alert-success text-center fw-semibold rounded-pill">
                  🎉 Limited Offer: Use <strong>IDLI10</strong> for 10% OFF!
                </div>

                {/* Order Summary */}
                <div className="mb-4">
                  <h5 className="fw-semibold">Order Summary</h5>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Steamed Idli (x1)</p>
                    <p className="mb-1">₹{originalPrice}</p>
                  </div>
                  {discount > 0 && (
                    <div className="d-flex justify-content-between text-success">
                      <p className="mb-1">Discount Applied</p>
                      <p className="mb-1">- ₹{discount}</p>
                    </div>
                  )}
                  <div className="d-flex justify-content-between text-muted">
                    <p className="mb-1">Delivery</p>
                    <p className="mb-1">{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>₹{discountedPrice}</strong>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mb-4">
                  <h5 className="fw-semibold">Apply Coupon</h5>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      disabled={couponApplied}
                    />
                    <button className="btn btn-outline-primary" onClick={applyCoupon} disabled={couponApplied}>
                      {couponApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {couponApplied && (
                    <small className="text-success">Coupon applied successfully!</small>
                  )}
                </div>

                {/* Delivery Info */}
                <div className="mb-4">
                  <h5 className="fw-semibold">Delivery Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone Number" className="form-control" />
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Address" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="City" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Pincode" className="form-control" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <h5 className="fw-semibold">Payment Method</h5>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="payment" id="cod" defaultChecked />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="payment" id="online" />
                    <label className="form-check-label" htmlFor="online">
                      Online Payment (Coming Soon)
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="text-center">
                  <button
                    className="btn btn-success w-100 py-2 fw-semibold rounded-pill"
                    onClick={() => navigate("/placeorder")}
                  >
                    Place Order
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Buynow;
