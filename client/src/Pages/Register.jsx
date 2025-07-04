import { useState } from 'react';
import {
  Shield,
  User,
  Stethoscope,
  Loader2,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: 'admin', label: 'Admin', icon: Shield },
    { id: 'patient', label: 'Patient', icon: User },
    { id: 'doctor', label: 'Doctor', icon: Stethoscope },
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      general: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors((prev) => ({ ...prev, general: '' }));

    try {
      const response = await fetch('https://hospital-3u6v.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: selectedRole,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: error.message || 'Registration failed. Please try again.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
        general: '',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="bg-blue-900 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Healthcare Portal</h1>
          <p className="text-blue-100 mt-1">Create Your Account</p>
        </div>

        <div className="p-6">
          {/* Role Selection */}
          <div className="flex bg-blue-50 rounded-lg p-1 mb-6">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all duration-300 transform ${
                  selectedRole === role.id
                    ? 'bg-blue-900 text-white scale-105 shadow-lg'
                    : 'text-blue-900 hover:bg-blue-100'
                }`}
              >
                <role.icon size={16} />
                <span>{role.label}</span>
              </button>
            ))}
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${
                  errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${
                  errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${
                    errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${
                    errors.confirmPassword ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="p-2 bg-red-50 text-red-600 rounded text-sm animate-pulse">
                {errors.general}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-blue-900 text-white rounded-md transition-all duration-300 hover:scale-105 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              } flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Registering</span>
                </>
              ) : (
                <span>Register</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
