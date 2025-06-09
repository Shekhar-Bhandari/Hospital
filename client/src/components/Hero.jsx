
import { FaCalendarCheck, FaUserMd, FaMoneyCheckAlt } from 'react-icons/fa';
import doctorImage from '../assets/doc13.png'; // replace with your actual image path
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-50 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-4 lg:flex lg:items-center lg:justify-around">
        {/* Left Content */}
        <div className=" text-center lg:text-left animate-fade-in-up">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
            Caring for Life
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Leading the Way <br />
            in Medical Excellence
          </h1>
         <Link to="/services-page"> <button onClick={() => {}} className="bg-blue-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-300 transition-all duration-300 shadow-md">
            Our Services
          </button></Link>
        </div>

        {/* Right Image */}
        <div className=" mt-10 lg:mt-0 animate-fade-in">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-full max-w-md mx-auto rounded-xl  transform hover:scale-106 transition-transform duration-500"
          />
        </div>
      </div>

      {/* CTA Buttons with Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 mt-10 animate-slide-up">
        <Link to="/appointment"><button className="flex items-center gap-3 bg-blue-900 text-white px-6 py-4 rounded-md w-full max-w-xs hover:bg-blue-800 transition duration-300 shadow-lg">
          <FaCalendarCheck size={20} />
          Book Appointment
        </button></Link>
        <button className="flex items-center gap-3 bg-blue-300 text-blue-900 px-6 py-4 rounded-md w-full max-w-xs hover:bg-blue-400 transition duration-300 shadow-lg">
          <FaUserMd size={20} />
          Book with Doctor
        </button>
        <button className="flex items-center gap-3 bg-blue-500 text-white px-6 py-4 rounded-md w-full max-w-xs hover:bg-blue-600 transition duration-300 shadow-lg">
          <FaMoneyCheckAlt size={20} />
          Book & Pay
        </button>
      </div>
    </section>
  );
};

export default Hero;
