import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactView = () => {
  const [contacts, setContacts] = useState([]);

  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/contacts', axiosConfig);
      setContacts(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/contacts/${id}`, axiosConfig);
      setContacts(contacts.filter(c => c._id !== id));
    } catch (error) {
      console.error("Failed to delete contact", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="flex flex-col gap-10 w-full md:w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">Contact</h2>
        <Link
          to='/admin/dashboard'
          className="block text-center bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">All Contacts</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{contact.name}</h4>
              <p className="text-sm text-gray-600 mb-1">Email: {contact.email}</p>
              <p className="text-sm text-gray-600 mb-4">{contact.message}</p>
              <button
                onClick={() => deleteContact(contact._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
