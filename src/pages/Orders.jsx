import React from "react";
import { Container, Table, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders); // Fetch orders from Redux

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <Container className="py-5">
        <h2 className="text-center mb-4">My Orders</h2>
        {orders.length === 0 ? (
          <p className="text-center">No orders placed yet.</p>
        ) : (
          orders.map((order, index) => (
            <Card key={order.id} className="mb-4 p-4 shadow-sm">
              {/* User Information */}
              <h4>Order #{index + 1}</h4>
              <p><strong>Customer:</strong> {order.customer.fullName}</p>
              <p><strong>Email:</strong> {order.customer.email}</p>
              <p><strong>Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.zip}</p>
              <p><strong>Order Date:</strong> {order.date}</p>
              <hr />

              {/* Table for Ordered Items */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <img
                          src={`https://e-commerce-json-data-ommh.onrender.com${item.image}`}
                          alt={item.name}
                          width={50}
                          height={50}
                          style={{ objectFit: 'cover', borderRadius: '5px' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/default.jpg"; // fallback if image fails
                          }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.quantity * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h5 className="text-end mt-3"><strong>Grand Total:</strong> ${order.total.toFixed(2)}</h5>
            </Card>
          ))
        )}
      </Container>
    </motion.div>
  );
};

export default Orders;
