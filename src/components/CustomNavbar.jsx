import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Badge,
  Offcanvas
} from "react-bootstrap";
import { Search } from "lucide-react";

const CustomNavbar = ({ onLoginClick }) => {
  const cart = useSelector((state) => state.mycart.cart);
  const cartItemCount = cart.length;
  const navigate = useNavigate();
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const toggleCategoryDropdown = () => setShowCategoryDropdown(!showCategoryDropdown);

  const categoryLinks = [
    { path: "/category/beverages", name: "Beverages" },
    { path: "/category/superfoods", name: "Superfoods" },
    { path: "/category/grainsrice", name: "Grains & Rice" },
    { path: "/category/nutsdryfruits", name: "Nuts & Dry Fruits" },
    { path: "/category/personalcare", name: "Personal Care" },
    { path: "/category/spreadsbutters", name: "Spreads & Butters" },
    { path: "/category/fruits", name: "Fruits" },
    { path: "/category/oils", name: "Oils" },
    { path: "/category/naturalsweeteners", name: "Natural Sweeteners" }
  ];

  // Check if current path is in any category
  const isInCategory = location.pathname.includes("/category/");

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm py-3 fixed-top">
        <Container>
          {/* Brand Logo with improved styling */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            <span className="text-success">Organic</span>
            <span className="text-dark">Mart</span>
          </Navbar.Brand>

          {/* Search button - Fixed position above mobile toggle */}
          <div className="d-flex d-lg-none order-lg-2">
            <Button 
              as={Link} 
              to="/productsearch" 
              variant="outline-success" 
              className="me-2 d-flex align-items-center"
            >
              <Search size={18} />
            </Button>

            <Button 
              as={Link} 
              to="/cartdata" 
              variant="outline-success" 
              className="me-2 position-relative"
            >
              🛒
              {cartItemCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            
            <Navbar.Toggle 
              aria-controls="navbarOffcanvas"
              onClick={handleOffcanvasShow}
              className="border-0"
            />
          </div>

          {/* Desktop navigation with green text */}
          <div className="d-none d-lg-flex flex-grow-1 justify-content-between align-items-center">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className="mx-2 fw-medium text-success"
              >
                Home
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/shop" 
                className="mx-2 fw-medium text-success"
              >
                Shop
              </Nav.Link>
              
              {/* Custom category dropdown that opens on click */}
              <div className="dropdown mx-2 position-relative">
                <div
                  className="nav-link fw-medium text-success cursor-pointer"
                  onClick={toggleCategoryDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  Categories
                </div>
                {showCategoryDropdown && (
                  <div className="dropdown-menu show position-absolute" style={{ top: '100%', left: 0 }}>
                    {categoryLinks.map((category, index) => (
                      <Link 
                        key={category.path}
                        to={category.path}
                        className="dropdown-item"
                        onClick={() => setShowCategoryDropdown(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                    <div className="dropdown-divider"></div>
                    <Link 
                      to="/category/naturalsweeteners"
                      className="dropdown-item"
                      onClick={() => setShowCategoryDropdown(false)}
                    >
                      Natural Sweeteners
                    </Link>
                  </div>
                )}
              </div>
              
              <Nav.Link 
                as={Link} 
                to="/about" 
                className="mx-2 fw-medium text-success"
              >
                About Us
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className="mx-2 fw-medium text-success"
              >
                Contact
              </Nav.Link>
            </Nav>
            
            <div className="d-flex align-items-center">
              <Button
                as={Link}
                to="/productsearch"
                variant="outline-success"
                className="me-3 d-flex align-items-center"
              >
                <Search size={18} className="me-1" /> Search
              </Button>
              
              <Button
                onClick={onLoginClick}
                variant="outline-success"
                className="me-3"
              >
                Login
              </Button>
              
              <Button
                as={Link}
                to="/cartdata"
                variant="success"
                className="position-relative"
              >
                🛒
                {cartItemCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu with green text */}
      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">
            <span className="text-success">Organic</span>
            <span className="text-dark">Mart</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleOffcanvasClose} 
              className="py-2 text-success"
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/shop" 
              onClick={handleOffcanvasClose} 
              className="py-2 text-success"
            >
              Shop
            </Nav.Link>
            
            <div className="py-2">
              <p className="mb-2 fw-bold ">Categories</p>
              <div className="ps-3 ">
                {categoryLinks.map((category) => (
                  <Nav.Link 
                    key={category.path}
                    as={Link} 
                    to={category.path}
                    onClick={handleOffcanvasClose}
                    className="py-1 text-success"
                  >
                    {category.name}
                  </Nav.Link>
                ))}
              </div>
            </div>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleOffcanvasClose} 
              className="py-2 text-success"
            >
              About Us
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleOffcanvasClose} 
              className="py-2 text-success"
            >
              Contact
            </Nav.Link>
            
            <div className="mt-3">
             
              
              <Button
                onClick={() => {
                  onLoginClick();
                  handleOffcanvasClose();
                }}
                variant="outline-success"
                className="w-100"
              >
                Login
              </Button>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Spacing to prevent content overlap */}
      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
};

export default CustomNavbar;