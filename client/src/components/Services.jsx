import { useState } from "react";

import { GiHeartPlus } from 'react-icons/gi';
import {
  FaHeartbeat,
  FaFlask,
  FaTint,
  FaStethoscope,
} from "react-icons/fa";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service.jpg";
import { Link } from "react-router-dom";

const services = [
  { name: "Free Checkup", icon: <FaStethoscope /> },
  { name: "Cardiogram", icon: <FaHeartbeat /> },
  { name: "Dna Testing", icon: <FaFlask /> },
  { name: "Blood Bank", icon: <FaTint /> },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const specialties = [
    'Neurology', 'Bones', 'Oncology', 'Otorhinolaryngology',
    'Ophthalmology', 'Cardiovascular', 'Pulmonology', 'Renal Medicine',
    'Gastroenterology', 'Urology', 'Dermatology', 'Gynaecology',
  ];

  return (
    <>
      <section className="bg-[#f9fefe] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-blue-500 uppercase font-semibold tracking-widest text-sm">
              Care You Can Believe In
            </p>
            <h2 className="text-4xl font-bold text-blue-900 mt-2">Our Services</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="flex lg:flex-col gap-4 items-center justify-center">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-300 ease-in-out transform shadow-md hover:scale-105 w-32 text-center ${
                    activeIndex === index
                      ? "bg-blue-900 text-white scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  <div className="text-3xl text-blue-500 mb-2">{service.icon}</div>
                  <span className="text-sm font-medium">{service.name}</span>
                </button>
              ))}

              {/* View All Button */}
              <Link to={"/services-page"}><button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 text-sm shadow"
                onClick={() => alert("View All Services clicked!")}
              >
                View All
              </button></Link>
            </div>

            {/* Service Content */}
            <div className="flex-1 animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                A passion for putting patients first.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700 text-md">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    A Passion for Healing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    All our best
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    A Legacy of Excellence
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    5-Star Care
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    Believe in Us
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                    Always Caring
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
                felis vitae tortor augue. Velit nascetur proin massa in.
              </p>
            </div>

            {/* Images */}
            <div className="flex flex-col gap-4">
              <img
                src={service1}
                alt="Service 1"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-105"
              />
              <img
                src={service2}
                alt="Service 2"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fbfc] py-12 px-4 md:px-12 text-center">
        <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-2">
          Always Caring
        </p>
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Specialties</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specialties.map((specialty) => (
            <div
              key={specialty}
              className={`rounded-lg border text-sm flex flex-col items-center justify-center py-6 gap-2 font-medium transition-all duration-300 ${
                specialty === 'Bones' ? 'bg-blue-900 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <GiHeartPlus
                className={`text-3xl ${
                  specialty === 'Bones' ? 'text-white' : 'text-blue-500'
                }`}
              />
              {specialty}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[url('./doc12.webp')] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Book an Appointment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 bg-[#1f2a56] text-white p-6 rounded-lg space-y-4">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white placeholder-white focus:outline-none"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white text-white focus:outline-none"
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white placeholder-white focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white placeholder-white focus:outline-none"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white text-white focus:outline-none"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white text-white focus:outline-none"
                required
              />
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white text-white focus:outline-none"
                required
              >
                <option value="">Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. John">Dr. John</option>
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1f2a56] border border-white text-white focus:outline-none"
                required
              >
                <option value="">Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1f2a56] border border-white placeholder-white focus:outline-none"
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#c4d9fc] text-[#1f2a56] font-semibold py-2 rounded hover:bg-blue-300 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Services;