import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: '',
  });

  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const API_BASE = 'http://localhost:8080/api/appointment';

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_BASE, formData, axiosConfig);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        gender: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
        department: '',
        message: '',
      });
    } catch (error) {
      alert('Failed to submit appointment');
      console.error(error);
    }
  };

  return (
    <div className="bg-white text-[#1f2a56] font-sans">
      {/* Your header and styles */}
      <div className="max-w-7xl mx-auto p-6 md:p-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
          <form
            onSubmit={handleSubmit}
            className="bg-[#1f2a56] text-white p-6 rounded-lg space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* All your inputs and selects, same as before */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 rounded text-white"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-2 rounded text-white bg-[#1f2a56]"
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 rounded text-white"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-2 rounded text-white"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-2 rounded text-white"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-2 rounded text-white"
                required
              />
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="p-2 rounded text-white bg-[#1f2a56]"
                required
              >
                <option value="">Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Jane">Dr. Jane</option>
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="p-2 rounded text-white bg-[#1f2a56]"
                required
              >
                <option value="">Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
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
        {/* Optionally keep your schedule hours and map */}
      </div>
    </div>
  );
};

export default Appointment;
