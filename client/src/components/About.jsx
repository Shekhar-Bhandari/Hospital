import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import teamImage from "../assets/about.webp"; // Replace with your actual image path


const About  = () => {
  return (
    <section className="bg-white py-16 px-4 text-center animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
          Welcome to Meddical
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          A Great Place to Receive Care
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>

        <Link to="/AboutUs"
          className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-900 transition duration-300"
        >
          Learn More <FaArrowRight />
        </Link>
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src={teamImage}
          alt="Medical Team"
          className="w-full max-w-5xl rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>
      
    </section>
   
  );
};

export default About;
