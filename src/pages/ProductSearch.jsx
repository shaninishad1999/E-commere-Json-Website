import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCartPlus, BsStarFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, increaseQuantity, decreaseQuantity } from "../cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();
  const [textval, setTextVal] = useState("");

  useEffect(() => {
    fetch("https://e-commerce-json-data-ommh.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value;
    setTextVal(searchValue);
    
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    if (product.Product_Quantity > 0) {
      dispatch(addtoCart(product));
    }
  };

  const proDisplay = (product) => {
    navigate(`/productdisplay/${product.id}`, { state: { product } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
    <Container className="py-5">
      <h2 className="text-center text-success mb-4">Our Organic Products</h2>
      <div className="mb-4 d-flex">
        <input
          type="text"
          name="search"
          value={textval}
          onChange={handleSearchInputChange}
          placeholder="Search products..."
          className="form-control me-2"
        />
        <Button   variant="success">Search</Button>
      </div>
      
      <Row className="g-4">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className={`${styles.card} h-100 shadow-sm`}>
                <Card.Img
                  onClick={() => proDisplay(product)}
                  variant="top"
                  src={`https://e-commerce-json-data-ommh.onrender.com${product.img}`}
                  className="rounded-top object-fit-cover cursor-pointer"
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{product.title}</Card.Title>
                  <Card.Text className="text-muted">{product.description}</Card.Text>
                  <span className={product.Product_Quantity > 0 ? "text-success" : "text-danger"}>
                    {product.Product_Quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    {product.Product_Quantity > 0 ? (
                      cartItem ? (
                        <div className="d-flex align-items-center">
                          <Button variant="outline-danger" size="sm" onClick={() => dispatch(decreaseQuantity(product.id))}>
                            <AiOutlineMinus />
                          </Button>
                          <span className="mx-2 fw-bold">{cartItem.quantity}</span>
                          <Button variant="outline-success" size="sm" onClick={() => dispatch(increaseQuantity(product.id))}>
                            <AiOutlinePlus />
                          </Button>
                        </div>
                      ) : (
                        <Button variant="outline-success" size="sm" onClick={() => handleAddToCart(product)}>
                          <BsCartPlus />
                        </Button>
                      )
                    ) : (
                      <Button variant="secondary" size="sm" disabled>Out of Stock</Button>
                    )}
                    <Button variant="success" size="sm" disabled={product.Product_Quantity === 0}>Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </motion.div>
  );
};

export default ProductSearch;