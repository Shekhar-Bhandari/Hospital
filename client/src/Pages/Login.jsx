import { useState } from 'react';
import {
  Shield,
  User,
  Stethoscope,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../Services/authService';
import {toast} from 'react-hot-toast'
import {Link} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: 'admin', label: 'Admin', icon: Shield },
    { id: 'patient', label: 'Patient', icon: User },
    { id: 'doctor', label: 'Doctor', icon: Stethoscope },
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '', general: '' };

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

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);
    setErrors((prev) => ({ ...prev, general: '' }));

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: selectedRole,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Successful authentication
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      localStorage.setItem('userId', data.userId);

      // Redirect based on role
      switch (data.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'doctor':
          navigate('/doctor/dashboard');
          break;
        default:
          navigate('/patient/dashboard');
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: error.message || 'Authentication failed. Please try again.',
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


/*const Login=()=>{
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const navigate=useNavigate();

  const loginHandler=async (e)=>{
    try {
      e.preventDefault();
      const data={email,password};
      const res=await AuthServices.loginUser(data);
      toast.success('login successful');
      navigate('/ServicesPage')
      
      
    } catch (error) {
      toast.error('Invalid email or password');
      console.log(error)
      
    }

  }
*/


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="bg-blue-900 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Healthcare Portal</h1>
          <p className="text-blue-100 mt-1">Secure Login</p>
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

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  <span>Authenticating</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
            <div>
              <p className='pl-50'>Not a User? <Link className='text-blue-500' to='/register'>register now</Link></p>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;