import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4}>
            <h4 className="fw-bold text-uppercase">About OrganicMart</h4>
            <p>
              We are committed to providing 100% organic and healthy food products, 
              carefully sourced from sustainable farms and delivered fresh to your door.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#shop" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#blog" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Customer Support */}
          <Col md={3}>
            <h5 className="fw-bold">Customer Support</h5>
            <ul className="list-unstyled">
              <li><a href="#faq" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="#shipping" className="text-light text-decoration-none">Shipping & Returns</a></li>
              <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col md={3}>
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <p>Get the latest updates on new products and special discounts.</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button variant="success">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="bg-light" />

        {/* Bottom Section */}
        <Row className="mt-3 text-center">
          <Col md={6}>
            <p className="m-0">© {new Date().getFullYear()} OrganicMart. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <h5 className="fw-bold">Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3 text-decoration-none">Facebook</a>
            <a href="https://instagram.com" className="text-light me-3 text-decoration-none">Instagram</a>
            <a href="https://twitter.com" className="text-light me-3 text-decoration-none">Twitter</a>
            <a href="https://youtube.com" className="text-light text-decoration-none">YouTube</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
