import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, increaseQuantity, decreaseQuantity } from "../cartSlice";

const ProductDisplay = () => {
  const { id } = useParams(); // Get Product ID from URL
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mycart.cart); // Get cart state
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // State for size selection

  useEffect(() => {
    const loadData = async () => {
      try {
        const api = `https://e-commerce-json-data-ommh.onrender.com/products/${id}`;
        const response = await axios.get(api);
        setProduct(response.data);

        // Set default size (first one in array)
        if (response.data.sizes && response.data.sizes.length > 0) {
          setSelectedSize(response.data.sizes[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    loadData();
  }, [id]);

  if (!product) {
    return <h2 className="text-center">Loading...</h2>;
  }

  const cartItem = cart.find((item) => item.id === product.id);

  // const handleAddToCart = () => {
  //   if (product.Product_Quantity > 0) {
  //     dispatch(
  //       addtoCart({
  //         id: product.id,
  //         name: product.title,
  //         category: product.category,
  //         price: product.price,
  //         image: product.img,
  //         quantity: 1,
  //       })
  //     );
  //   }
  // };

  const handleAddToCart = () => {
    if (product.Product_Quantity > 0) {
      setLoading(true);
      setTimeout(() => {
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          dispatch(increaseQuantity(product.id)); // Increase quantity if already in cart
        } else {
          dispatch(
            addtoCart({
              id: product.id,
              name: product.title,
              category: product.category,
              price: product.price,
              image: product.img,
              quantity: 1,
            })
          );
        }

        setLoading(false);
      }, 500);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        {/* Left - Product Image */}
        <Col md={5} className="text-center">
          <img
            src={product.img}
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

          {/* Size Selection */}
          <h6>Size</h6>
          <div className="mb-3">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={
                  size === selectedSize ? "success" : "outline-secondary"
                }
                className="me-2"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>

          {/* Quantity Counter */}
          <h6>Quantity</h6>
          <div className="d-flex align-items-center mb-4">
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => dispatch(decreaseQuantity(product.id))}
              className="me-2"
              disabled={!cartItem} // Agar cart mein nahi hai toh disable
            >
              <AiOutlineMinus />
            </Button>

            <span className="fw-bold">{cartItem ? cartItem.quantity : 0}</span>

            <Button
              variant="outline-success"
              size="sm"
              onClick={() => dispatch(increaseQuantity(product.id))}
              className="ms-2"
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
              disabled={product.Product_Quantity === 0}
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
