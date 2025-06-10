const express = require('express');
const router = express.Router();


const authMiddleware = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');


const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment
} = require('../controllers/appointController.js');


router.post('/',authMiddleware, createAppointment);
router.get('/',authMiddleware,authorizeRole('admin'), getAllAppointments);
router.get('/:id',authMiddleware,authorizeRole('admin'), getAppointmentById);
router.put('/:id',authMiddleware,authorizeRole('admin'), updateAppointment)
router.delete('/:id',authMiddleware,authorizeRole('admin'), deleteAppointment);

module.exports = router;


