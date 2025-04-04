import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/crousalImg/img_1.png";
import Img2 from "../assets/crousalImg/img_2.png";
import Img3 from "../assets/crousalImg/img_3.png";
import Img4 from "../assets/crousalImg/img_4.png";
import Img5 from "../assets/crousalImg/img_5.png";

import Product from "../components/Product";
import Banner from "../components/Banner";
import CertificationLogos from "../components/CertificationLogos";
import TestimonialsSection from "../components/TestimonialsSection";
import ProductFAQs from "../components/ProductFAQs";

const Home = () => {
  return (
    <>
      <div className="carousel-container mt-10">
        <Carousel fade>
          <Carousel.Item>
            <div className="carousel-item-inner">
              <img
                className="d-block w-100"
                src={Img1}
                alt="Fresh Organic Vegetables"
              
             
              />
             
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-inner">
              <img
                className="d-block w-100"
                src={Img2}
                alt="Healthy Grains & Pulses"
               
              />
          
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-inner">
              <img
                className="d-block w-100"
                src={Img3}
                alt="Organic Spices & Herbs"
              
              />
            
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-inner">
              <img
                className="d-block w-100"
                src={Img4}
                alt="Dry Fruits & Nuts"
               
              />
             
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-inner">
              <img
                className="d-block w-100"
                src={Img5}
                alt="Healthy Snacks & Beverages"
               
              />
             
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
      {/* Your other components would go here */}
      <Banner />
      <Product />
      <CertificationLogos />
      <TestimonialsSection />
      <ProductFAQs />
    </>
  );
};

export default Home;