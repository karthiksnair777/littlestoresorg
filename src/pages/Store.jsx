import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import Header from '../components/Header';

const categories = ['All', 'Vegetables', 'Dairy', 'Bakery', 'Fruits'];

function Store() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [orders, setOrders] = useState([]);

  const products = [
    {
      id: 1,
      name: "iD Idli & Dosa Batter",
      price: 165,
      category: "Dairy",
      image: "https://cdn.zeptonow.com/production/tr:w-400,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/28e35241-6a2d-4ba4-b8a7-96d0ff68410d.jpeg",
    },
    {
      id: 2,
      name: "Eggoz Fresh White Eggs",
      price: 338,
      category: "Dairy",
      image: "https://cdn.zeptonow.com/production/tr:w-400,ar-2500-2500,pr-true,f-auto,q-80/cms/product_variant/044a0893-3136-416a-978b-36da192b4443.jpeg",
    },
    {
      id: 3,
      name: "Modern Wheat Bread",
      price: 60,
      category: "Bakery",
      image: "https://cdn.zeptonow.com/production/tr:w-400,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/db861d74-0ecb-4f56-82dc-5857f87bc80e.jpeg",
    },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const getTopProduct = (cartItems) => {
    if (cartItems.length === 0) return '-';
    return cartItems.reduce((top, current) =>
      current.qty > top.qty ? current : top
    ).name;
  };

  // Cookie helpers
  const getCookie = (name) => {
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
      const [key, val] = cookie.trim().split('=');
      if (key === name) return decodeURIComponent(val);
    }
    return null;
  };

  const setCookie = (name, value, days = 7) => {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  };

  const saveOrderToCookies = (order) => {
    const existing = getCookie('orders');
    let updatedOrders = [];
    if (existing) {
      try {
        updatedOrders = JSON.parse(existing);
      } catch (e) {
        console.error('Cookie parse error:', e);
      }
    }
    updatedOrders.push(order);
    setCookie('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      status: 'Pending'
    };
    saveOrderToCookies(newOrder);
    setCart([]);
  };

  const deleteOrder = (id) => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    setCookie('orders', JSON.stringify(updated));
  };

  const updateOrderStatus = (id, status) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated);
    setCookie('orders', JSON.stringify(updated));
  };

  // Load orders initially and keep checking for updates every 2 seconds
  useEffect(() => {
    const fetchOrders = () => {
      const cookieData = getCookie('orders');
      if (cookieData) {
        try {
          const parsed = JSON.parse(cookieData);
          setOrders(parsed);
        } catch (e) {
          console.error('Invalid cookie data:', e);
        }
      }
    };

    fetchOrders(); // Load on mount
    const interval = setInterval(fetchOrders, 2000); // Sync every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        {/* Dashboard Cards */}
        <Row className="mb-4">
          <h2>Store Dashboard</h2>
          <Col md={3}><Card className="text-center shadow-sm"><Card.Body><h6>Total Sales</h6><h4>₹{total}</h4></Card.Body></Card></Col>
          <Col md={3}><Card className="text-center shadow-sm"><Card.Body><h6>Total Orders</h6><h4>{cart.length}</h4></Card.Body></Card></Col>
          <Col md={3}><Card className="text-center shadow-sm"><Card.Body><h6>Top Product</h6><h4>{getTopProduct(cart)}</h4></Card.Body></Card></Col>
          <Col md={3}><Card className="text-center shadow-sm"><Card.Body><h6>Items in Cart</h6><h4>{totalItems}</h4></Card.Body></Card></Col>
        </Row>

        {/* Main POS Layout */}
        <Row>
          {/* Categories */}
          <Col md={2}>
            <h5>Categories</h5>
            <ListGroup>
              {categories.map(cat => (
                <ListGroup.Item
                  key={cat}
                  active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ cursor: 'pointer' }}
                >
                  {cat}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Products */}
          <Col md={5}>
            <h5>Products</h5>
            <Row className="g-3">
              {filteredProducts.map(product => (
                <Col key={product.id} sm={6}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={product.image} style={{ height: "150px", objectFit: "contain" }} />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">{product.name}</Card.Title>
                      <p className="fw-bold">₹{product.price}</p>
                      <Button variant="success" size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Cart */}
          <Col md={2}>
            <Card className="p-3">
              <h5>Cart</h5>
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <>
                  <ListGroup>
                    {cart.map(item => (
                      <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                        <div>{item.name} x {item.qty}</div>
                        <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>✕</Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <hr />
                  <h6>Total: ₹{total}</h6>
                  <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
                </>
              )}
            </Card>
          </Col>

          {/* Orders Card */}
          <Col md={3}>
            <Card className="p-3">
              <h5>Orders</h5>
              {orders.length === 0 ? <p>No orders yet.</p> : (
                <ListGroup>
                  {orders.map(order => (
                    <ListGroup.Item key={order.id}>
                      <div className="fw-bold mb-1">Order #{order.id}</div>
                      <div>Items: {(order.items || []).map(i => `${i.name} x ${i.qty}`).join(', ')}</div>
                      <div>Total: ₹{order.total}</div>
                      <Form.Select
                        size="sm"
                        className="mt-1 mb-2"
                        value={order.status}
                        onChange={e => updateOrderStatus(order.id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </Form.Select>
                      <Button size="sm" variant="outline-danger" onClick={() => deleteOrder(order.id)}>Delete</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Store;
