import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// Extended doctors array for pagination demo
const doctorsData = [
  {
    id: 1,
    name: "Doctor A",
    specialty: "NEUROLOGY",
    image: "/images/doc1.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Doctor B",
    specialty: "CARDIOLOGY",
    image: "/images/doc2.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Doctor C",
    specialty: "ORTHOPEDICS",
    image: "/images/doc3.avif",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Doctor D",
    specialty: "PEDIATRICS",
    image: "/images/doc1.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Doctor E",
    specialty: "DERMATOLOGY",
    image: "/images/doc2.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Doctor F",
    specialty: "ENT",
    image: "/images/doc3.avif",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

const Doctors = () => {
  const doctorsPerPage = 3;
  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);
  const [activePage, setActivePage] = useState(0);

  // Get the doctors for the current page
  const displayedDoctors = doctorsData.slice(
    activePage * doctorsPerPage,
    activePage * doctorsPerPage + doctorsPerPage
  );

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 text-center">
      {/* Header */}
      <h4 className="text-blue-600 font-semibold uppercase tracking-widest mb-2">
        Trusted Care
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a56] mb-12">
        Our Doctors
      </h2>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedDoctors.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl overflow-hidden shadow-md bg-[#e7efff] transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-96 object-cover transition-transform duration-500 ease-in-out"
            />

            {/* Info Box */}
            <div className="p-6 text-[#1f2a56]">
              <h3 className="font-semibold text-xl">{doc.name}</h3>
              <p className="font-bold tracking-widest mt-1 text-lg">
                {doc.specialty}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 mt-4 text-2xl">
                <a
                  href={doc.social.linkedin}
                  className="transition-colors duration-300 hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={doc.social.facebook}
                  className="transition-colors duration-300 hover:text-blue-700"
                >
                  <FaFacebook />
                </a>
                <a
                  href={doc.social.instagram}
                  className="transition-colors duration-300 hover:text-blue-700"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Profile Button */}
            <Link to={`/doctors/${doc.id}`}>
              <button className="w-full bg-[#1f2a56] text-white py-3 font-semibold hover:bg-[#2c3e75] transition-colors duration-300">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActivePage(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activePage === idx
                ? "bg-[#1f2a56] animate-bounce"
                : "bg-[#c4d9fc]"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Doctors;