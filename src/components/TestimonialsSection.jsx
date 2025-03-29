import React from "react";
import { Quote } from "lucide-react";
import img1 from "../assets/certified/ecocertlogo.jpeg";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechInnovate",
    quote:
      "This product has transformed our workflow and increased productivity by 50%.",
    image: img1,
  },
  {
    name: "Michael Chen",
    position: "Lead Developer, CodeCraft Solutions",
    quote:
      "Intuitive design and powerful features make this the best tool I've used in years.",
    image: img1,
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, GlobalBrand Inc.",
    quote:
      "Exceptional customer support and a game-changing platform for our team.",
    image: img1,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <Quote className="text-gray-200 mb-4" size={48} />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;