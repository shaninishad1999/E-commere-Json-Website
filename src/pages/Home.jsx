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
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={Img1}
            alt="Fresh Organic Vegetables"
            height="650px"
            width="100%"
          />
          <Carousel.Caption className="text-black">
            <h3 className="font-bold">Fresh Organic Vegetables</h3>
            <p>
              Experience the best farm-fresh organic produce for a healthier
              lifestyle.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Img2}
            alt="Healthy Grains & Pulses"
            height="650px"
            width="100%"
          />
          <Carousel.Caption>
            <h3>Healthy Grains & Pulses</h3>
            <p>High-quality organic grains packed with nutrition and taste.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Img3}
            alt="Organic Spices & Herbs"
            height="650px"
            width="100%"
          />
          <Carousel.Caption className="text-black">
            <h3 className="font-bold">Organic Spices & Herbs</h3>
            <p>Pure and aromatic spices sourced naturally for your kitchen.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Img4} alt="Dry Fruits & Nuts" height="650px" width="100%" />
          <Carousel.Caption>
            <h3>Dry Fruits & Nuts</h3>
            <p>A healthy mix of premium quality organic dry fruits and nuts.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Img5}
            alt="Healthy Snacks & Beverages"
            height="700px"
            width="100%"
          />
          <Carousel.Caption>
            <h3>Healthy Snacks & Beverages</h3>
            <p>Enjoy delicious and nutritious organic snacks and drinks.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Banner />
      <Product />
      <CertificationLogos />
      <TestimonialsSection />
      <ProductFAQs />
    </div>
  );
};

export default Home;
