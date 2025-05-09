import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, increaseQuantity, decreaseQuantity } from "../cartSlice";
import { motion } from 'framer-motion';

const ProductDisplay = () => {
  const { id } = useParams(); // Get Product ID from URL
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mycart.cart); // Get cart state
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const loadData = async () => {
      try {
        const api = `https://e-commerce-json-data-ommh.onrender.com/products/${id}`;
        const response = await axios.get(api);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    loadData();
  }, [id]);

  if (!product) {
    return <h2 className="text-center">Loading...</h2>;
  }

  // Get the default size (first one in the array)
  const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "Standard";

  const handleAddToCart = () => {
    if (product.Product_Quantity > 0) {
      setLoading(true);
      setTimeout(() => {
        dispatch(
          addtoCart({
            id: product.id,
            name: product.title,
            category: product.category,
            price: product.price,
            image: product.img,
            quantity: quantity, // Use the current quantity state
            size: defaultSize
          })
        );
        setLoading(false);
      }, 500);
    }
  };
  
  const handleBuy = () => {
navigate("/cartdata"); // Navigate to checkout page after adding to cart
  }
  // Functions to increase and decrease quantity
  const increaseQty = () => {
    if (quantity < product.Product_Quantity) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          {/* Left - Product Image */}
          <Col md={5} className="text-center">
            <img
              src={`https://e-commerce-json-data-ommh.onrender.com${product.img}`}
              alt={product.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "450px" }}
            />
          </Col>

          {/* Right - Product Details */}
          <Col md={6}>
            <h3 className="text-success">{product.title}</h3>
            <p className="text-muted">{product.description}</p>

            {/* Price & Discount */}
            <div className="d-flex gap-4 align-items-center mb-3">
              <div>
                <span className="text-muted text-decoration-line-through me-2">
                  {product.price}
                </span>
                <span className="text-success fw-bold">{product.sale_price}</span>
              </div>

              {product.discount && (
                <span className="badge bg-danger text-white fw-bold px-2 py-1">
                  {product.discount} off
                </span>
              )}
              {product.limited_time_deal && (
                <span className="text-danger fw-bold ms-2">
                  Limited time deal
                </span>
              )}
            </div>

            {product.Product_Quantity > 0 ? (
              <span className="text-success fw-bold">In Stock</span>
            ) : (
              <span className="text-danger fw-bold">Out of Stock</span>
            )}

            {/* Display only one size */}
            <h6>Size</h6>
            <div className="mb-3">
              <span className="badge bg-secondary px-3 py-2">{defaultSize}</span>
            </div>

            {/* Quantity Counter */}
            <h6>Quantity</h6>
            <div className="d-flex align-items-center mb-4">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={decreaseQty}
                className="me-2"
                disabled={quantity <= 1}
              >
                <AiOutlineMinus />
              </Button>

              <span className="fw-bold">{quantity}</span>

              <Button
                variant="outline-success"
                size="sm"
                onClick={increaseQty}
                className="ms-2"
                disabled={quantity >= product.Product_Quantity}
              >
                <AiOutlinePlus />
              </Button>
            </div>

            {/* Add to Cart Button */}
            <div className="mb-2">
              <Button
                variant="outline-success"
                size="sm"
                className="w-96"
                onClick={handleAddToCart}
                disabled={loading || product.Product_Quantity === 0}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>{" "}
                    Adding...
                  </>
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>
            
            {/* Buy Now Button */}
            <div>
              <Button
                variant="success"
                size="sm"
                className="w-96"
                
                onClick={() => {
                  handleBuy();
                  navigate("/cartdata"); // Navigate to checkout page after adding to cart
                }}
                disabled={product.Product_Quantity === 0}
              >
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ProductDisplay;