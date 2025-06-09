const Contact = require('../models/contactModel'); // Import model

exports.handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save contact to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    
    res.status(200).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
