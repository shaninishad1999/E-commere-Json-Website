import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
  Badge,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomNavbar = ({ onLoginClick }) => {
  const Product = useSelector((state) => state.mycart.cart);
  const proLength = Product.length;
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <Navbar expand="lg" className="bg-light shadow-sm py-3 fixed-top">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <span className="text-success">Organic</span>
            <span className="text-dark">Mart</span>
          </Navbar.Brand>

          {/* Navbar Toggle for Mobile View */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            {/* Navigation Links */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="text-dark">
                Shop
              </Nav.Link>

              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/category/beverages">
                  Beverages
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/superfoods">
                  Superfoods
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/grainsrice">
                  GrainsRice
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/nutsdryfruits">
                  Nuts & Dry Fruits
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/personalcare">
                  Personal Care
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/spreadsbutters">
                  Spreads Butters
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/category/fruits">
                  Fruits
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/oils">
                  Oils
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/category/naturalsweeteners">
                  Natural Sweeteners
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/about" className="text-dark">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-dark">
                Contact
              </Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex me-3">
             
            <Button
                  as={Link}
                  to="/productsearch"
                  variant="success"
                  className="position-relative"
                >
                  Search
                </Button>
            </Form>

            {/* Login and Cart Buttons */}
            <div className="d-flex align-items-center">
              <Button
                onClick={onLoginClick}
                variant="outline-success"
                className="me-3"
              >
                Login
              </Button>

              <div className="position-relative">
                <Button
                  as={Link}
                  to="/cartdata"
                  variant="success"
                  className="position-relative"
                >
                  🛒
                  {proLength > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      {proLength}
                    </Badge>
                  )}
                </Button>
                &nbsp;
                {/* <Button
                  as={Link}
                  to="/orders"
                  variant="success"
                  className="position-relative"
                >O
                </Button> */}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacing to prevent content overlap */}
      <div style={{ paddingTop: "110px" }}></div>
    </>
  );
};

export default CustomNavbar;
