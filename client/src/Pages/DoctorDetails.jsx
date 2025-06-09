// src/pages/DoctorDetails.jsx

import { useParams, Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    image: "images/doctor1.avif",
    name: "Dr. Sarah Bennett",
    specialty: "NEUROLOGY",
    bio: "Dr. Sarah is a leading neurologist with over 15 years of experience...",
  },
  {
    id: 2,
    image: "images/doctor2.webp",
    name: "Dr. Alan Carter",
    specialty: "NEUROLOGY",
    bio: "Dr. Alan specializes in spinal disorders and stroke recovery...",
  },
  {
    id: 3,
    image: "images/doctor3.jpeg",
    name: "Dr. Maria Lee",
    specialty: "NEUROLOGY",
    bio: "Dr. Maria is passionate about pediatric neurology and research.",
  },
  // Add more doctors as needed
];

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return (
      <div className="text-center text-red-600 mt-20 text-xl">
        Doctor not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img
          src={`/${doctor.image}`}
          alt={doctor.name}
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-900">{doctor.name}</h1>
          <p className="text-blue-600 mt-2 font-medium">{doctor.specialty}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{doctor.bio}</p>

          <Link to="/doctors">
            <button className="mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-semibold">
              Back to Doctors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
