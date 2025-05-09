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
import toast from "react-hot-toast"; // ✅ Import toast
import { useNavigate } from "react-router-dom";

const Superfoods = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mycart.cart); // Get cart state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://e-commerce-json-data-ommh.onrender.com/products/?category=Superfoods")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    if (product.Product_Quantity > 0) {
      dispatch(
        addtoCart({
          id: product.id,
          name: product.title,
          category: product.category,
          price: product.price,
          image: product.img,
          quantity: product.quantity,
        })
      );
    }
  };
  const proDisplay = (product) => {
    navigate(`/productdisplay/${product.id}`, { state: { product } });
  };

  return (
    <Container className="py-5">
      <h2 className="text-center text-success mb-4">Our Organic Superfoods</h2>
      <Row className="g-4">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className={`${styles.card} h-100 shadow-sm`}>
                <div className="position-relative">
                  <Card.Img
                    onClick={() => proDisplay(product)} // ✅ Pass full product data
                    variant="top"
                    src={`https://e-commerce-json-data-ommh.onrender.com${product.img}`}
                    className="rounded-top object-fit-cover cursor-pointer"
                    style={{ height: "250px" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0 text-truncate">
                      {product.title}
                    </Card.Title>
                    <div className="d-flex align-items-center">
                      <BsStarFill className="text-warning me-1" />
                      <span className="fw-bold">{product.rating}</span>
                    </div>
                  </div>
                  <Card.Text className="text-muted mb-2 flex-grow-1">
                    {product.description}
                  </Card.Text>
                  {product.Product_Quantity > 0 ? (
                    <span className="text-success fw-bold">In Stock</span>
                  ) : (
                    <span className="text-danger fw-bold">Out of Stock</span>
                  )}
                  <td>
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
                  </td>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="text-muted text-decoration-line-through me-2">
                        {product.price}
                      </span>
                      <span className="text-success fw-bold">
                        {product.sale_price}
                      </span>
                    </div>
                    <div>
                      <span className="text-success fw-bold">
                        {product.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-auto">
                    {product.Product_Quantity > 0 ? (
                      cartItem ? (
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                            className="me-2"
                          >
                            <AiOutlineMinus />
                          </Button>
                          <span className="fw-bold">{cartItem.quantity}</span>
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                            className="ms-2"
                          >
                            <AiOutlinePlus />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          <BsCartPlus />
                        </Button>
                      )
                    ) : (
                      <Button variant="secondary" size="sm" disabled>
                        Out of Stock
                      </Button>
                    )}

                    <Button
                      variant="success"
                      size="sm"
                      disabled={product.Product_Quantity === 0}
                    >
                      Buy Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Superfoods;
