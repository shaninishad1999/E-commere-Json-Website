import React from "react";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        {/* Hero Section */}
        <section className="relative h-80 bg-green-600 flex items-center justify-center text-white text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg mt-2">We are committed to delivering excellence in every aspect of our work.</p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-600">Our Mission</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our mission is to provide top-quality products and services that make a difference. We strive for innovation, 
              customer satisfaction, and long-term success.
            </p>
            <img
              src="https://source.unsplash.com/800x400/?success,goal"
              alt="Our mission"
              className="mx-auto mt-6 rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>
        </section>

        {/* Our Team Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-green-600">Meet Our Team</h2>
            <p className="text-gray-700 mt-4">A dedicated group of professionals working towards excellence.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {[{ name: "John Doe", role: "Senior Developer", img: "https://source.unsplash.com/150x150/?man" },
                { name: "Jane Smith", role: "Product Manager", img: "https://source.unsplash.com/150x150/?woman" },
                { name: "Michael Lee", role: "UX Designer", img: "https://source.unsplash.com/150x150/?person" }
              ].map((member, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full" />
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-600">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[{ title: "Quality Service", desc: "We focus on delivering the best services to our clients." },
                { title: "Expert Team", desc: "Our team consists of highly skilled professionals." },
                { title: "Customer Support", desc: "We offer 24/7 support to assist you anytime." },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-200 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-green-600">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[{ name: "Alex Johnson", review: "Absolutely fantastic service! Highly recommend." },
                { name: "Sophia Williams", review: "They truly care about their customers. Amazing experience!" },
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <p className="text-gray-700">{testimonial.review}</p>
                  <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-600">Ready to Work With Us?</h2>
            <p className="text-gray-700 mt-4">Join us and be a part of something amazing.</p>
            <a href="/contact" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
    </motion.div>
  );
};

export default About;