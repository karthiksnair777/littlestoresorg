import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Table,
  Card,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const initialUsers = [
  { id: 1, name: 'Alice', role: 'User' },
  { id: 2, name: 'Bob', role: 'Store Vendor' },
  { id: 3, name: 'Charlie', role: 'User' },
];

const initialOrders = [];

function Admin() {
  const [users, setUsers] = useState(initialUsers);
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', role: 'User' });
  const [editOrder, setEditOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState('');
  const navigate = useNavigate();

  // Load orders from cookies with polling
  useEffect(() => {
    const fetchOrders = () => {
      const cookieOrders = Cookies.get('orders');
      const parsedOrders = cookieOrders ? JSON.parse(cookieOrders) : [];
      const allOrders = [...initialOrders, ...parsedOrders];
      setOrders(allOrders);
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setForm({ name: '', role: 'User' });
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const newUser = { id: users.length + 1, ...form };
    setUsers([...users, newUser]);
    handleClose();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateOrderStatus = () => {
    const updated = orders.map((o) =>
      o.id === editOrder.id ? { ...o, status: orderStatus } : o
    );
    setOrders(updated);
    Cookies.set('orders', JSON.stringify(updated), { expires: 7 });
    setEditOrder(null);
  };

  const deleteOrder = (id) => {
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    Cookies.set('orders', JSON.stringify(updated), { expires: 7 });
  };

  return (
    <>
      <Header />
      <Container fluid className="mt-3">
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-light vh-100 p-3">
            <h5>Admin Panel</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Button variant="link" onClick={() => navigate('/')}>
                  Orders
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" onClick={() => navigate('/placeorder')}>
                  Place Order
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" onClick={() => alert('Coming Soon')}>
                  Admin Settings
                </Button>
              </li>
            </ul>
          </Col>

          <Col md={10}>
            {/* Dashboard Cards */}
            <Row className="mb-3">
              <Col md={4}>
                <Card className="p-3 text-white bg-primary">
                  <h6>Total Sales</h6>
                  <h3>₹12,345</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="p-3 text-white bg-success">
                  <h6>Total Users</h6>
                  <h3>{users.length}</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="p-3 bg-warning text-dark">
                  <h6>Notifications</h6>
                  <p>No new notifications</p>
                </Card>
              </Col>
            </Row>

            {/* User Management */}
            <Card
              className="p-3"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-white">User & Vendor Accounts</h5>
                <Button size="sm" variant="success" onClick={handleShow}>
                  Add User
                </Button>
              </div>
              <Table
                striped
                bordered
                hover
                size="sm"
                className="mt-3 text-white"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>

            {/* Order Management */}
            <Card
              className="p-3 mt-4"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
            >
              <h5 className="text-white mb-3">Orders</h5>
              <Table
                striped
                bordered
                hover
                size="sm"
                className="text-white"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              >
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Store</th>
                    <th>User</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.store || 'N/A'}</td>
                      <td>{order.user || 'Unknown'}</td>
                      <td>
                        {Array.isArray(order.items)
                          ? order.items.map((item, i) =>
                              typeof item === 'string'
                                ? item
                                : `${item.name} x ${item.qty}`
                            ).join(', ')
                          : 'No items'}
                      </td>
                      <td>₹{order.total || 0}</td>
                      <td>{order.status}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="info"
                          onClick={() => {
                            setEditOrder(order);
                            setOrderStatus(order.status);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          className="ms-2"
                          onClick={() => deleteOrder(order.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>

        {/* Add User Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User or Vendor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option>User</option>
                  <option>Store Vendor</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Order Modal */}
        <Modal show={!!editOrder} onHide={() => setEditOrder(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Update Order Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={orderStatus}
                  onChange={(e) => setOrderStatus(e.target.value)}
                >
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setEditOrder(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={updateOrderStatus}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Admin;
