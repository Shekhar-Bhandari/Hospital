import React from 'react';
import { FaCircle } from 'react-icons/fa';

// Replace with your actual image imports
// import BannerImage from '../images/banner.jpg';
// import NursesImage from '../images/nurses.webp';
import Doctors from '../components/Doctors';
import News from '../components/News';
import Contact from '../components/Contact';
 // Optional: background image for quote

const AboutUs = () => {
  return (
    <section className="bg-white text-[#1f2a56]">
      {/* Top Banner Section */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('images/banner.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full"> 
          <div className="text-center text-white">
            <p className="text-sm">Home / About</p>
            <h2 className="text-4xl font-bold mt-2">About us</h2>
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src='images/nurses.webp' alt="Team of doctors" className="rounded-lg shadow-md" />
        </div>
        <div>
          <h4 className="text-sm text-blue-500 font-semibold uppercase mb-2">Welcome to Hospital Name</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Best Care for Your Good Health</h2>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            {[
              "A Passion for Healing",
              "5-Star Care",
              "All our best",
              "Believe in Us",
              "Always Caring",
              "A Legacy of Excellence"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <FaCircle className="text-blue-500 text-xs mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. 
          </p>
          <p className="text-gray-600">
            Consequat faucibus porttitor enim et. Convallis felis vitae vitae tortor augue. Velit nascetur proin massa in.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-[#1f2a56] text-white py-16 text-center px-4">
        {/* Optional background image overlay (if used in design) */}
        {/* <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${BgQuote})` }}></div> */}

        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-2xl italic mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.”
          </p>
          <p className="font-semibold text-blue-200">John Doe</p>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-blue-200 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-200 rounded-full"></span>
          </div>
        </div>
      </div>
      <Doctors/>
      <News/>
      <Contact/>
    </section>
  );
};

export default AboutUs;
