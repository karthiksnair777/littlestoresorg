import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Dairy",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    link: "/dairy",
  },
  {
    id: 2,
    name: "Fruits",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    link: "/fruits",
  },
  {
    id: 3,
    name: "Bread",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    link: "/product/3",
  },
  {
    id: 4,
    name: "Milk",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    link: "/product/4",
  },
  {
    id: 5,
    name: "Eggs",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    link: "/product/5",
  },
];

function Inventory() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-dark">🛍️ Explore Our Products</h2>

        {/* Search Bar */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Search by product name..."
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="row justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-2 d-flex justify-content-center mb-3">
                <div className="card p-3 shadow-sm rounded" style={{ width: "200px" }}>
                  <Link to={product.link}>
                    <img
                      src={product.image}
                      className="card-img-top rounded"
                      alt={product.name}
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted mt-4">No products found.</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inventory;
