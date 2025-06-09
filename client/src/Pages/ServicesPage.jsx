import React from 'react';

// Lucide React for icons (assuming it's available in the environment)
// If not, you might need to install it: npm install lucide-react
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ServiceCard Component
const ServiceCard = ({ title, description, imageUrl, hasBlueOverlay}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72"> {/* Responsive height */}
        {hasBlueOverlay ? (
          <div className="absolute inset-0 bg-blue-700 bg-opacity-80 flex items-center justify-center">
            {/* Placeholder for the icon within the blue overlay */}
            {/* You can replace this with a proper icon from lucide-react or an SVG */}
       <img src={imageUrl} alt="" />
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `images/serviceImage1.jpg`;
            }}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {description}
        </p>
        <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

// App Component
const ServicesPage = () => {
  // Placeholder image URLs for the service cards
  const serviceImages = [
    'images/serviceImage1.jpg',
    'images/serviceImage2.jpg',
    'images/serviceImage3.png',
    'images/serviceImage4.jpg',
    'images/serviceImage5.avif',
    'images/serviceImage6.avif',
  ];

  const services = [
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue velit nascetur massa in.",
      imageUrl: serviceImages[0],
      hasBlueOverlay: true, // First card has the blue overlay
    },
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      imageUrl: serviceImages[1],
      hasBlueOverlay: false,
    },
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in",
      imageUrl: serviceImages[2],
      hasBlueOverlay: false,
    },
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue, Velit nascetur massa in",
      imageUrl: serviceImages[3],
      hasBlueOverlay: false,
    },
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat. Convallis felis vitae tortor augue. Velit nascetur massa in.",
      imageUrl: serviceImages[4],
      hasBlueOverlay: false,
    },
    {
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in",
      imageUrl: serviceImages[5],
      hasBlueOverlay: false,
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Header/Hero Section */}
      <header className="relative bg-gray-800 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden rounded-b-lg">
        {/* Background Image - using a placeholder for now */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('images/banner.jpg')`, // Replace with your actual image URL
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-60"></div>


        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm sm:text-base mb-4 text-center">
            <a href="#" className="hover:underline">Home</a> / <span className="font-semibold">Services</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
            Our Services
          </h1>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              hasBlueOverlay={service.hasBlueOverlay}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
