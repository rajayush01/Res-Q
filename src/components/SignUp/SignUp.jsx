import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });

  // Update form data state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add user registration logic
    // For this example, we'll just route based on user type
    if (formData.userType === 'individual') {
      navigate('/DashboardIndividual');
    } else if (formData.userType === 'ngo') {
      navigate('/DashboardNGO');
    }
  };

  // Check if all fields are filled
  const isFormValid =
    formData.name && formData.email && formData.password && formData.userType;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Whitish Blue Gradient Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/60 via-transparent to-sky-100/60"></div>
        
        {/* Floating Geometric Shapes - Whitish Blue Theme */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-sky-200/40 to-blue-300/30 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-slate-200/50 to-sky-200/40 blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-200/30 to-slate-300/40 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Grid Pattern Overlay - Lighter */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(148, 163, 184)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 py-20">
        {/* Title Section */}
        <motion.div
          className="flex flex-col justify-center items-center gap-6 mb-8 z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-600 via-blue-600 to-sky-700 bg-clip-text text-transparent drop-shadow-lg text-center">
            Join Our Community!
          </h1>
          <p className="text-center text-slate-600 text-base sm:text-lg max-w-lg -mt-5 -mb-5 leading-relaxed">
            Create an account and explore our disaster management platform. We
            can't wait to have you onboard!
          </p>
        </motion.div>

        {/* Signup Card */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-xl border border-slate-200/50 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Card Glow Effect - Whitish Blue */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-200/30 via-blue-200/30 to-sky-200/30 blur-xl -z-10"></div>
          
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            Create Your Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            {["name", "email", "password"].map((field) => (
              <motion.div
                key={field}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label
                  htmlFor={field}
                  className="block text-slate-700 text-sm font-semibold tracking-wide"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <motion.input
                  type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-slate-800 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-sky-400 transition-all duration-300 placeholder-slate-400"
                  placeholder={`Enter your ${field}`}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            ))}

            {/* Account Type Select */}
            <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="userType"
                className="block text-slate-700 text-sm font-semibold tracking-wide"
              >
                Account Type
              </label>
              <motion.select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-slate-800 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-sky-400 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">Select Account Type</option>
                <option value="individual">Individual User</option>
                <option value="ngo">NGO</option>
              </motion.select>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg focus:outline-none transition-all duration-300 ${
                isFormValid
                  ? "bg-gradient-to-r from-slate-500 via-blue-500 to-sky-600 text-white hover:from-sky-600 hover:to-slate-500 hover:shadow-2xl hover:shadow-blue-400/25"
                  : "bg-slate-400/50 text-slate-500 cursor-not-allowed"
              }`}
              whileHover={isFormValid ? { scale: 1.05, y: -2 } : {}}
              whileTap={isFormValid ? { scale: 0.98 } : {}}
              disabled={!isFormValid}
            >
              Create Account
            </motion.button>
          </form>
          
          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300/40"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-slate-500">Already have an account?</span>
              </div>
            </div>
            <motion.a
              href="/login"
              className="inline-block mt-3 text-blue-600 hover:text-sky-700 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Sign in here
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
