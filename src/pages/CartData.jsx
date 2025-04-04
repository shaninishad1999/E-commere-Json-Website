import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../styles/Cart.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { increaseQuantity, decreaseQuantity } from "../cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
const CartData = () => {
  const proData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
 const navigate=useNavigate();
  // Calculate total cart price
  const totalCartPrice = proData.reduce(
    (total, product) => total + (product.totalPrice || 0),
    0
  );

  // Calculate total number of items
  const totalItems = proData.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // Handle Checkout
  const handleCheckout = () => {
    // alert(
    //   `Total Items: ${totalItems} \nTotal Amount: $${totalCartPrice.toFixed(2)}`
    // );
    navigate("/checkout")
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
    <Container className="py-5">
      <h2 className="text-center text-success mb-4">🛒 My Shopping Cart</h2>
      <Button
      as={Link}
      to="/orders"
      variant="success"
      className="position-relative mb-4"
      >
      Go to  Order Section
      </Button>
      {proData.length > 0 ? (
        <div className="table-responsive">
          <Table
            striped
            bordered
            hover
            className={`${styles.cartTable} text-center`}
          >
            <thead className="bg-dark text-white">
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {proData.map((product, index) => (
                <tr key={product.id}>
                  <td className="fw-bold">{index + 1}</td>
                  <td>
                    <img
                    src={`https://e-commerce-json-data-ommh.onrender.com${product.image}`} // Prepend the base URL

                      alt={product.name}
                      className={`${styles.productImage} img-fluid`}
                      style={{ maxWidth: "50px", height: "auto" }}
                    />
                  </td>
                  <td className="fw-bold">{product.name}</td>
                  <td className="text-muted">{product.category}</td>
                  <td className="text-success fw-bold">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="text-success fw-bold">
                    ${product.totalPrice.toFixed(2)}
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="me-2"
                        style={{ padding: "2px 6px", fontSize: "12px" }}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <span
                        className="fw-bold"
                        style={{
                          fontSize: "14px",
                          minWidth: "20px",
                          textAlign: "center",
                        }}
                      >
                        {product.quantity}
                      </span>
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="ms-2"
                        style={{ padding: "2px 6px", fontSize: "12px" }}
                      >
                        <AiOutlinePlus />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <h4 className="text-center text-muted">Your cart is empty! 🛍️</h4>
      )}

      {proData.length > 0 && (
        <div className="text-right mt-4">
          <h5 className="fw-bold text-dark"></h5>
          <h4 className="fw-bold text-dark">
            Total Price ({totalItems} Items) :{" "}
            <span className="text-success">${totalCartPrice.toFixed(2)}</span>
          </h4>
          <Button variant="success" onClick={handleCheckout}>
            Proceed to Buy
          </Button>
        </div>
      )}
    </Container>
    </motion.div>
  );
};

export default CartData;
