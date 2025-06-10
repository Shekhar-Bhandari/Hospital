require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const postsRoutes = require('./routes/postsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const appointRoutes = require('./routes/appointRoutes');

connectDB();

const app = express();
const PORT = process.env.PORT || 8000; // Changed to match your frontend calls

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Public routes: register/login have no auth middleware
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/posts', postsRoutes);

// Contact route
app.use('/api/contacts', contactRoutes);

// Appointment routes
app.use('/api/appointment', appointRoutes);

app.listen(PORT, () => {
    console.log(`Server running and MongoDB connected at http://localhost:${PORT}`);
});