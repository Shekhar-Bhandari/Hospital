import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AppointView = () => {
  const [appointments, setAppointments] = useState([]);
  const [editing, setEditing] = useState(null);
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

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await axios.get('https://hospital-3u6v.onrender.com/api/appointment', axiosConfig);
      setAppointments(res.data);
    } catch (error) {
      console.error('Failed to fetch appointments', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Delete appointment
  const deleteAppointment = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;

    try {
      await axios.delete(`https://hospital-3u6v.onrender.com/api/appointment/${id}`, axiosConfig);
      setAppointments(appointments.filter(a => a._id !== id));
    } catch (error) {
      console.error('Failed to delete appointment', error.response?.data || error.message);
    }
  };

  // Start editing an appointment
  const startEdit = (appointment) => {
    setEditing(appointment._id);
    setFormData({
      name: appointment.name || '',
      gender: appointment.gender || '',
      email: appointment.email || '',
      phone: appointment.phone || '',
      date: appointment.date ? appointment.date.split('T')[0] : '',
      time: appointment.time || '',
      doctor: appointment.doctor || '',
      department: appointment.department || '',
      message: appointment.message || '',
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditing(null);
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
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) return;

    try {
      const res = await axios.put(
        `https://hospital-3u6v.onrender.com/api/appointment/${editing}`,
        formData,
        axiosConfig
      );
      setAppointments(appointments.map(a => (a._id === editing ? res.data : a)));
      cancelEdit();
    } catch (error) {
      console.error('Failed to update appointment', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="flex flex-col gap-10 w-full md:w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">Appointments</h2>
        <Link
          to="/admin/dashboard"
          className="block text-center bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8">
        {editing ? (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Edit Appointment</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="doctor"
                placeholder="Doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
              rows={3}
            />

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-900 hover:bg-blue-800 text-white"
              >
                Update
              </button>
            </div>
          </form>
        ) : (
          <h3 className="text-xl font-semibold mb-4 text-gray-700">All Appointments</h3>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            appointments.map((a) => (
              <div key={a._id} className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{a.name}</h4>
                <p className="text-sm text-gray-600 mb-1">Gender: {a.gender}</p>
                <p className="text-sm text-gray-600 mb-1">Email: {a.email}</p>
                <p className="text-sm text-gray-600 mb-1">Phone: {a.phone}</p>
                <p className="text-sm text-gray-600 mb-1">Date: {a.date.split('T')[0]}</p>
                <p className="text-sm text-gray-600 mb-1">Time: {a.time}</p>
                <p className="text-sm text-gray-600 mb-1">Doctor: {a.doctor}</p>
                <p className="text-sm text-gray-600 mb-1">Department: {a.department}</p>
                {a.message && <p className="text-sm text-gray-600 mb-2">Message: {a.message}</p>}

                <div className="flex gap-4">
                  <button
                    onClick={() => startEdit(a)}
                    className="text-yellow-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAppointment(a._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointView;
