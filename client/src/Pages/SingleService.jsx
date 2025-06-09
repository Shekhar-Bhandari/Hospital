
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample data matching your ServicesPage services
const servicesData = [
  {id: 1,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Nascetur massa in.",
    imageUrl: 'images/serviceImage1.jpg',
    hasBlueOverlay: true,
  },
  {
    id: 2,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
    imageUrl: 'images/serviceImage2.jpg',
    hasBlueOverlay: false,
  },
  {
    id: 3,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
    imageUrl: 'images/serviceImage3.png',
    hasBlueOverlay: false,
  },
  {
    id: 4,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue, velit nascetur massa in.",
    imageUrl: 'images/serviceImage4.jpg',
    hasBlueOverlay: false,
  },
  {
    id: 5,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
    imageUrl: 'images/serviceImage5.avif',
    hasBlueOverlay: false,
  },
  {
    id: 6,
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
    imageUrl: 'images/serviceImage6.avif',
    hasBlueOverlay: false,
  },
];

const SingleService = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Service not found.</p>
        <Link to="/services" className="text-blue-600 hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Header/Hero Section */}
      <header className="relative bg-gray-800 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden rounded-b-lg">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('images/banner.jpg')`, backgroundSize: 'cover' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm sm:text-base mb-4">
            <Link to="/" className="hover:underline">Home</Link> /{' '}
            <Link to="/services" className="hover:underline">Services</Link> /{' '}
            <span className="font-semibold">{service.title}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {service.title}
          </h1>
        </div>
      </header>

      {/* Service Details Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'images/serviceImage1.jpg';
              }}
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
              Back to Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;