import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../orderSlice";
import { clearCart } from "../cartSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { motion } from 'framer-motion';
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate function
  const cartItems = useSelector((state) => state.mycart.cart);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      id: new Date().getTime(),
      customer: formData,
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.totalPrice, 0),
      date: new Date().toLocaleString(),
    };

    dispatch(placeOrder(orderData));
    dispatch(clearCart());
    setShowModal(true);
  };

  const handleGoToOrders = () => {
    setShowModal(false);
    navigate("/orders"); // Redirect to the My Orders section
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    <Container className="py-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <Row>
        <Col md={7}>
          <Card className="p-4 shadow-sm">
            <h4>Billing Details</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <h4>Payment Method</h4>
              <Form.Group className="mb-3">
                <Form.Check
                  type="radio"
                  label="Credit/Debit Card"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" variant="success" className="w-100 mt-3">
                Place Order
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="p-4 shadow-sm">
            <h4>Order Summary</h4>
            <p>Items: <strong>{cartItems.length}</strong></p>
            <p>Total: <strong>${cartItems.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)}</strong></p>
            <hr />
            <p className="text-muted">Shipping & taxes calculated at checkout.</p>
          </Card>
        </Col>
      </Row>

      {/* Order Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order is confirmed and is on the way! 🚀</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleGoToOrders}>
            Go to My Orders
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </motion.div>
  );
};

export default Checkout;
