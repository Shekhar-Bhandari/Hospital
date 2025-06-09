// DoctorProfile.jsx
import { useParams } from "react-router-dom";

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
    id:3,
    image: "images/doctor3.jpeg",
    name: "Dr. Maria Lee",
    specialty: "NEUROLOGY",
    bio: "Dr. Maria is passionate about pediatric neurology and research.",
  }
  // add bios and more doctors
];

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id.toString() === id);

  if (!doctor) {
    return <div className="text-center mt-10 text-red-500">Doctor not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={`/${doctor.image}`}
          alt={doctor.name}
          className="w-60 h-60 object-cover rounded-full shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-900">{doctor.name}</h1>
          <p className="text-blue-600 mt-2">{doctor.specialty}</p>
          <p className="mt-4 text-gray-700">{doctor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
