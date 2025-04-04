import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>
        <Row>
          {/* Contact Information */}
          <Col md={5}>
            <h4 className="fw-bold">Get in Touch</h4>
            <p>If you have any questions, feel free to reach out to us!</p>
            <ul className="list-unstyled">
              <li><strong>📍 Address:</strong> 123 Organic Street, Green City, Earth</li>
              <li><strong>📞 Phone:</strong> +1 234 567 890</li>
              <li><strong>📧 Email:</strong> support@organicmart.com</li>
              <li><strong>🕒 Hours:</strong> Mon-Fri: 9 AM - 6 PM</li>
            </ul>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <h4 className="fw-bold">Send Us a Message</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>
              <Button variant="success" type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>

        {/* Google Map Embed */}
        {/* <Row className="mt-5">
          <Col>
            <h4 className="fw-bold text-center">Find Us on the Map</h4>
            <div className="d-flex justify-content-center">
              <iframe
                title="Google Map"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0, maxWidth: "800px" }}
                src="https://www.google.com/maps/embed/v1/place?q=Green+City+Earth&key=YOUR_GOOGLE_MAPS_API_KEY"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
    </motion.div>
  );
};

export default Contact;
