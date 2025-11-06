import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      console.log('Signup attempt:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f6]">
      <div className="flex h-full grow flex-col">
        <main className="flex flex-1 items-stretch">
          <div className="flex-1 lg:grid lg:grid-cols-2">
            {/* Left Side - Image Section */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-[#2bee6c]/10">
              <div className="flex flex-col items-center text-center max-w-md">
                   <img 
      className="w-full max-w-sm rounded-xl object-cover h-64" 
      src="/images/man-holding-pile-clean-clothes.jpg"  // Change this to your actual image filename
      alt="Clean laundry service" 
    />
                {/* Placeholder for image - you can replace with actual image */}
                <h2 className="text-3xl font-bold mt-8 text-slate-800">
                  Fresh laundry, delivered to your door.
                </h2>
                <p className="text-slate-600 mt-4">
                  Join Cleanzy Mart today and experience the convenience of on-demand laundry and dry-cleaning services.
                </p>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col max-w-md w-full space-y-8">
                {/* Header */}
                <div>
                  <h1 className="text-[#111813] tracking-tight text-[32px] font-bold leading-tight text-center">
                    Get Started with Cleanzy Mart
                  </h1>
                  <p className="mt-2 text-center text-sm text-slate-600">
                    Create an account to start your journey to cleaner clothes.
                  </p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {errors.submit}
                    </div>
                  )}

                  <div className="space-y-4 rounded-md">
                    {/* Full Name Field */}
                    <div>
                      <label className="flex flex-col w-full">
                        <p className="text-[#111813] text-base font-medium leading-normal pb-2">
                          Full Name
                        </p>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813] focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border ${
                            errors.fullName ? 'border-red-500' : 'border-[#dbe6df]'
                          } bg-white focus:border-[#2bee6c] h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal transition-all duration-200`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </label>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="flex flex-col w-full">
                        <p className="text-[#111813] text-base font-medium leading-normal pb-2">
                          Email Address
                        </p>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813] focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border ${
                            errors.email ? 'border-red-500' : 'border-[#dbe6df]'
                          } bg-white focus:border-[#2bee6c] h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal transition-all duration-200`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </label>
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="flex flex-col w-full">
                        <p className="text-[#111813] text-base font-medium leading-normal pb-2">
                          Password
                        </p>
                        <div className="relative flex w-full flex-1 items-stretch">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813] focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border ${
                              errors.password ? 'border-red-500' : 'border-[#dbe6df]'
                            } bg-white focus:border-[#2bee6c] h-14 placeholder:text-slate-400 p-[15px] pr-12 text-base font-normal leading-normal transition-all duration-200`}
                            placeholder="Enter your password"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
                          >
                            {showPassword ? '🙈' : '👁️'}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                      </label>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label className="flex flex-col w-full">
                        <p className="text-[#111813] text-base font-medium leading-normal pb-2">
                          Confirm Password
                        </p>
                        <div className="relative flex w-full flex-1 items-stretch">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813] focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border ${
                              errors.confirmPassword ? 'border-red-500' : 'border-[#dbe6df]'
                            } bg-white focus:border-[#2bee6c] h-14 placeholder:text-slate-400 p-[15px] pr-12 text-base font-normal leading-normal transition-all duration-200`}
                            placeholder="Confirm your password"
                          />
                          <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
                          >
                            {showConfirmPassword ? '🙈' : '👁️'}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex w-full justify-center rounded-lg border border-transparent bg-[#2bee6c] px-4 py-3.5 text-base font-semibold text-black hover:bg-[#2bee6c]/90 focus:outline-none focus:ring-2 focus:ring-[#2bee6c] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        'Sign Up'
                      )}
                    </button>
                  </div>
                </form>

                {/* Login Link */}
                <div className="text-center text-sm">
                  <p className="text-slate-600">
                    Already have an account?
                    <Link 
                      to="/login" 
                      className="font-medium text-[#2bee6c] hover:text-[#2bee6c]/90 ml-1"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;