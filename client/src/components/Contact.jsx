import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ContactCard = ({ icon: Icon, title, children, dark = false }) => (
  <div className={`rounded-2xl p-6 shadow-md ${
    dark ? "bg-[#1E2562] text-white" : "bg-blue-100"
  }`}>
    <div className="flex items-center space-x-4 mb-4">
      <Icon className={`h-8 w-8 ${dark ? "text-white" : "text-blue-900"}`} />
      <h3 className="text-lg font-bold uppercase">{title}</h3>
    </div>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const Contact = () => {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
        Get in touch
      </p>
      <h2 className="text-3xl font-bold text-blue-900 mb-12">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <ContactCard icon={PhoneIcon} title="Emergency">
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </ContactCard>

        <ContactCard icon={MapPinIcon} title="Location" dark>
          <p>0123 Some place</p>
          <p>9876 Some country</p>
        </ContactCard>

        <ContactCard icon={EnvelopeIcon} title="Email">
          <p>fildineeessoe@gmail.com</p>
          <p>myebstudios@gmail.com</p>
        </ContactCard>

        <ContactCard icon={ClockIcon} title="Working Hours">
          <p>Mon–Sat 09:00–20:00</p>
          <p>Sunday Emergency only</p>
        </ContactCard>
      </div>
    </section>
  );
};

export default Contact;