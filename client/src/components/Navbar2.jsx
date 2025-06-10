import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSearch, FaUserMd } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false); // New state for toggle
  const navigate = useNavigate();


  const navItems = [
    
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/AboutUs' },
    { name: 'Services', path: '/services-page' },
    { name: 'News', path: '/news' },
    { name: 'Doctors', path: '/our-doctors' },
    { name: 'Contact', path: '/contact' },
    { name: '', path: '/appointment' },
    { name: '', path: '/news/:id' },
     
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSearchInput(false); // Close after search
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-md bg-[#1f2a56] backdrop-blur-md'
          : 'bg-gradient-to-r bg-[#1f2a56]'
      } text-white`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-full">
          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center h-full w-16 justify-center">
            <button
              className="p-2 rounded-md hover:bg-blue-900 transition-colors"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle navigation"
            >
              {isNavOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex justify-center items-center flex-1">
            <div className="flex space-x-8 items-center">
              {navItems.map((item) => (
                item.name && (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-blue-200 transition-colors font-medium py-2 px-2 text-center h-full flex items-center relative group ${
                        isActive ? 'text-blue-300' : ''
                      }`
                    }
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                    </span>
                  </NavLink>
                )
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search - Icon Only (Expands on Click) */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setShowSearchInput(!showSearchInput)}
                className="p-2 text-blue-200 hover:text-white transition-colors"
                aria-label="Search"
              >
                <FaSearch />
              </button>
              {showSearchInput && (
                <form onSubmit={handleSearch} className="flex items-center h-10 bg-white/20 rounded-full overflow-hidden ml-2 transition-all">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none px-4 py-2 text-white placeholder-blue-200 w-40 focus:w-52 transition-all duration-300 h-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </form>
              )}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <NavLink
                to="/appointment"
                className="flex items-center h-10 bg-white text-blue-900 hover:bg-blue-50 px-6 py-2 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <span>Appointment</span>
                <span className="ml-2 text-blue-900">→</span>
              </NavLink>
              <NavLink
                to="/login"
                className="flex items-center h-10 bg-blue-900 text-white hover:bg-blue-900 px-6 py-2 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <span>Login</span>
              </NavLink>
            </div>

            {/* Mobile Logo */}
            {!isNavOpen && (
              <div className="md:hidden flex items-center justify-center h-full w-16">
                <NavLink to="/">
                  <FaUserMd className="text-2xl text-blue-900" />
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-blue-800 pb-6 animate-fadeIn">
            <div className="flex items-center justify-center py-4">
              <FaUserMd className="text-3xl mr-3 text-blue-900" />
              <NavLink to="/" className="text-xl font-bold" onClick={() => setIsNavOpen(false)}>
                MEDICAL
              </NavLink>
            </div>

            {/* Mobile Search - Icon Only */}
            <div className="flex justify-center mb-4">
              <button 
                onClick={() => setShowSearchInput(!showSearchInput)}
                className="p-3 text-blue-200 hover:text-white transition-colors"
                aria-label="Search"
              >
                <FaSearch size={20} />
              </button>
            </div>
            {showSearchInput && (
              <form onSubmit={handleSearch} className="flex items-center h-12 bg-white/20 rounded-full mx-4 mb-4 px-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full h-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </form>
            )}

            {/* Mobile Links */}
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                item.name && (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsNavOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 hover:bg-blue-900 px-4 rounded-lg transition-colors font-medium text-center border-l-4 ${
                        isActive ? 'border-blue-900 bg-blue-700' : 'border-transparent hover:border-blue-300'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
              <NavLink
                to="/appointment"
                onClick={() => setIsNavOpen(false)}
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-colors shadow-sm mt-2 w-full flex items-center justify-center"
              >
                <span>Appointment</span>
                <span className="ml-2 text-blue-700">→</span>
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setIsNavOpen(false)}
                className="bg-blue-900 text-white hover:bg-blue-900 px-6 py-3 rounded-full font-semibold transition-colors shadow-sm mt-2 w-full flex items-center justify-center"
              >
                <span>Login</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;