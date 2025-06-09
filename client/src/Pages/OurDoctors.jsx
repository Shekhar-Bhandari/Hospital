import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
} from "react-icons/fa";
import News from "../components/News";
import Contact from "../components/Contact";
import DoctorDetails from "./DoctorDetails";

const doctors = [
  {
    id: 1,
    image: "images/doctor1.avif",
    name: "Dr. Sarah Bennett",
    specialty: "NEUROLOGY",
  },
  {
    id: 2,
    image: "images/doctor2.webp",
    name: "Dr. Alan Carter",
    specialty: "NEUROLOGY",
  },
  {
    id: 3,
    image: "images/doctor3.jpeg",
    name: "Dr. Maria Lee",
    specialty: "NEUROLOGY",
  },
  {
    id: 4,
    image: "images/doctor4.jpg",
    name: "Dr. James Wong",
    specialty: "NEUROLOGY",
  },
  {
    id: 5,
    image: "images/doctor5.jpg",
    name: "Dr. Olivia Martin",
    specialty: "NEUROLOGY",
  },
  {
    id: 6,
    image: "images/doctor6.avif",
    name: "Dr. Ethan Patel",
    specialty: "NEUROLOGY",
  },
];

const OurDoctors = () => {
  const navigate=useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    navigate(`/doctors/${doctor.id}`)
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Banner */}
      <div className="relative">
        <img
          src="/images/doctors.jpg"
          alt="Doctors Banner"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm">Home / Doctors</p>
            <h1 className="text-4xl font-bold">
              Our <span className="text-blue-400">Doctors</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => handleDoctorClick(doctor)}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[300px] object-cover rounded-t-2xl"
            />
            <div className="bg-blue-50 py-5 px-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-sm font-medium text-blue-900 tracking-widest mt-1">
                {doctor.specialty}
              </p>
              <div className="flex justify-center gap-4 mt-3 text-blue-900 text-lg">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
            <Link to={`/doctor/${doctor.id}`}>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 font-semibold">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <DoctorDetails doctor={selectedDoctor} />
          </div>
        </div>
      )}

      {/* Testimonial */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-900 text-white py-16 px-6 relative">
        <div className="max-w-xl mx-auto text-center">
          <FaQuoteLeft className="text-4xl mb-4 inline-block text-white/80" />
          <p className="text-lg mb-6 leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque felis vitae tortor augue. Velit nascetur consequat
            faucibus porttitor enim et."
          </p>
          <p className="font-bold text-lg">John Doe</p>
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <News />
      <Contact />
    </div>
  );
};

export default OurDoctors;
