import React from 'react';

const Appointment = () => {
  return (
    <div className="bg-white text-[#1f2a56] font-sans">
      {/* Header */}
      <div className="relative bg-cover bg-center h-60 flex items-center justify-center text-blue-950">
       <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/images/appointment-bg.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   
  }}
></div>
        <h2 className="relative text-3xl font-bold z-10">Book an Appointment</h2>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6 md:p-12 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare.
          </p>

          {/* Form */}
          <form className="bg-[#1f2a56] text-white p-6 rounded-lg space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded text-white"
              />
           <select className="p-2 rounded text-white bg-[#1f2a56]">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded text-white"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-2 rounded text-white"
              />
              <input
                type="date"
                className="p-2 rounded text-white"
              />
              <input
                type="time"
                className="p-2 rounded text-white"
              />
              <select className="p-2 rounded text-white bg-[#1f2a56]">
                <option>Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. Jane</option>
              </select>
              <select className="p-2 rounded text-white bg-[#1f2a56]">
                <option>Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-2 rounded text-white"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-200 hover:bg-blue-300 text-[#1f2a56] font-semibold px-4 py-2 rounded w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section - Schedule */}
        <div className="bg-[#1f2a56] text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Schedule hours</h3>
          <ul className="space-y-2 text-sm">
            {[
              ['Monday', '09:00 AM – 07:00 PM'],
              ['Tuesday', '09:00 AM – 07:00 PM'],
              ['Wednesday', '09:00 AM – 07:00 PM'],
              ['Thursday', '09:00 AM – 07:00 PM'],
              ['Friday', '09:00 AM – 07:00 PM'],
              ['Saturday', '09:00 AM – 07:00 PM'],
              ['Sunday', 'Closed'],
            ].map(([day, hours]) => (
              <li key={day} className="flex justify-between border-b border-white/20 pb-1">
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>

          {/* Emergency Contact */}
          <div className="mt-6 text-center">
            <p className="font-semibold">Emergency</p>
            <p className="text-blue-200">(237) 681-812-255</p>
          </div>
        </div>
      </div>

      {/* Embedded Map (Placeholder) */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <iframe
          title="map"
          className="w-full h-96 rounded-lg"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=location&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Appointment;
