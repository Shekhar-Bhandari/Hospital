import React, { useState } from 'react';
import News from '../components/News';

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://hospital-3u6v.onrender.com/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      alert('Message sent successfully!');
      setContactData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="bg-gray-100 py-10 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(images/contact.jpg)' }}
        ></div>
        <div className="relative z-20 container mx-auto px-4">
          <p className="text-sm text-gray-600 text-center">Home / Contact</p>
          <h1 className="text-4xl font-bold text-blue-900 mt-2 text-center">Our Contacts</h1>
        </div>
      </div>

      {/* Map */}
      <div className="container mx-auto px-30 py-10">
        <iframe
          title="Map"
          className="w-full h-96 rounded shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.730624768005!2d-74.00594108459343!3d40.7127757793304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1614782069123!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-30 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-blue-900 uppercase">Get in Touch</h2>
          <h3 className="text-2xl font-semibold">Contact</h3>
          <form onSubmit={handleSubmit} className="bg-blue-900 p-6 shadow-md rounded space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contactData.name}
                onChange={handleChange}
                className="border p-2 w-full text-white bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactData.email}
                onChange={handleChange}
                className="border p-2 w-full text-white bg-transparent"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={contactData.subject}
              onChange={handleChange}
              className="border p-2 w-full text-white bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={contactData.message}
              onChange={handleChange}
              className="border p-2 w-full h-32 text-white bg-transparent"
            />
            <button type="submit" className="bg-blue-100 text-red-900 px-6 py-2 rounded">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded shadow">
            <h4 className="text-blue-800 font-semibold mb-2">Emergency</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>

          <div className="bg-blue-900 text-white p-6 rounded shadow">
            <h4 className="font-semibold mb-2">Location</h4>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>

          <div className="bg-blue-100 p-6 rounded shadow">
            <h4 className="text-blue-800 font-semibold mb-2">Email</h4>
            <p>fldinleeeson@gmail.com</p>
            <p>mybestuudios@gmail.com</p>
          </div>

          <div className="bg-blue-100 p-6 rounded shadow">
            <h4 className="text-blue-800 font-semibold mb-2">Working Hours</h4>
            <p>Mon-Sat: 09:00 - 20:00</p>
            <p>Sunday: Emergency only</p>
          </div>
        </div>
      </div>
      <News />
    </div>
  );
};

export default ContactPage;
