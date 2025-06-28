import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add authentication logic
    // For this example, we'll just route based on user type
    if (formData.userType === 'individual') {
      navigate('/DashboardIndividual');
    } else if (formData.userType === 'ngo') {
      navigate('/DashboardNGO');
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    // Decide dashboard routing based on additional info from Google login
    // For now, defaulting to individual dashboard
    navigate('/DashboardIndividual');
  };

  const handleGoogleLoginError = () => {
    console.error("Google Login Failed");
  };

  const isFormValid = formData.email && formData.password && formData.userType;

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="relative min-h-screen overflow-hidden">
        {/* Aesthetic Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/60 via-transparent to-sky-100/60"></div>
          
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-32 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-sky-200/40 to-blue-200/40 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-200/50 to-blue-300/50 blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-slate-200/30 to-blue-200/30 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Animated Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="#1e40af" strokeWidth="0.5" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lines)" />
            </svg>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            className="flex flex-col items-center gap-8 text-center w-full max-w-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent drop-shadow-lg">
                Welcome Back!
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Log in to access your personalized dashboard.
              </p>
            </div>

            {/* Login Card */}
            <motion.div
              className="relative bg-white/80 backdrop-blur-xl border border-blue-200/50 p-8 rounded-3xl shadow-xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200/30 via-sky-200/30 to-indigo-200/30 blur-xl -z-10"></div>
              
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
                Sign In
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 tracking-wide"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-slate-800 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder-slate-400"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Password Input */}
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700 tracking-wide"
                  >
                    Password
                  </label>
                  <motion.input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-slate-800 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder-slate-400"
                    placeholder="Enter your password"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* User Type Select */}
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="userType"
                    className="block text-sm font-semibold text-slate-700 tracking-wide"
                  >
                    Account Type
                  </label>
                  <motion.select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-slate-800 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select Account Type</option>
                    <option value="individual">Individual User</option>
                    <option value="ngo">NGO</option>
                  </motion.select>
                </motion.div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  className={`w-full py-4 px-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                    isFormValid
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-indigo-500 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
                      : "bg-slate-300/50 text-slate-500 cursor-not-allowed"
                  }`}
                  whileHover={isFormValid ? { scale: 1.05, y: -2 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  disabled={!isFormValid}
                >
                  Sign In
                </motion.button>
              </form>

              {/* Signup Link */}
              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">Don't have an account?</span>
                  </div>
                </div>
                <motion.a
                  href="/signup"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Create account
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
