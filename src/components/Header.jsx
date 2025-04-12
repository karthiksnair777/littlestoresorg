import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState('User');

  // Sync role with URL
  useEffect(() => {
    if (location.pathname.includes('/admin')) {
      setRole('Admin');
    } else if (location.pathname.includes('/store')) {
      setRole('Store');
    } else {
      setRole('User');
    }
  }, [location.pathname]);

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'Admin') {
      navigate('/admin');
    } else if (selectedRole === 'Store') {
      navigate('/store');
    } else {
      navigate('/');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary border-0 shadow-none">
      <Container>
        <Navbar.Brand className="text-success" href="">LittleStores</Navbar.Brand>

        <Form className="d-flex w-25">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 form-control"
            aria-label="Search"
          />
        </Form>
        <Nav.Link href="Locator" className="fw-bold"><i class="fa-solid fa-location-dot"></i> select location</Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
          
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Inventory</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>

            <Dropdown onSelect={handleSelect} className="ms-3">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {role}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/" eventKey="User">User</Dropdown.Item>
                <Dropdown.Item href="/admin" eventKey="Admin">Admin</Dropdown.Item>
                <Dropdown.Item href="/store" eventKey="Store">Store</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
