const Appointment = require('../models/appointModel.js');

// Create new appointment (Submit form)
const createAppointment = async (req, res) => {
  try {
    const {
      name,
      gender,
      email,
      phone,
      date,
      time,
      doctor,
      department,
      message
    } = req.body;

    const newAppointment = new Appointment({
      name,
      gender,
      email,
      phone,
      date,
      time,
      doctor,
      department,
      message
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error: error.message });
  }
};

// Get all appointments (for admin view)
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
  }
};

// Get single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving appointment', error: error.message });
  }
};

// Optional: Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete appointment', error: error.message });
  }
};
const updateAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update appointment', error: error.message });
  }
};


module.exports = {
    updateAppointment,
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment
};
