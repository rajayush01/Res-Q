import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  MapPin,
  Users,
  Warehouse,
  AlertTriangle,
  HeartHandshake,
  Languages,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import EmergencyModal from "../../components/EmergencyModal/EmergencyModal.jsx";

const Landing = () => {
  const navigate = useNavigate();
  const [isEmergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description:
        "Advanced machine learning models analyze patterns to predict and alert communities about potential disasters",
      color: "text-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Warehouse,
      title: "Smart Resource Management",
      description:
        "Real-time inventory tracking system for efficient resource allocation and distribution.",
      color: "text-emerald-500",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
    {
      icon: MapPin,
      title: "Real-Time Mapping",
      description:
        "Live geospatial dashboard showing disaster zones, resources, and optimal relief routes",
      color: "text-red-500",
      bgGradient: "from-red-50 to-red-100",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Crowdsourced reporting system enabling communities to mark risks and request assistance",
      color: "text-purple-500",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: HeartHandshake,
      title: "Volunteer Coordination",
      description:
        "Smart matching system connecting skilled volunteers with critical tasks",
      color: "text-amber-500",
      bgGradient: "from-amber-50 to-amber-100",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description:
        "AI-powered translation ensuring critical information reaches all communities",
      color: "text-pink-500",
      bgGradient: "from-pink-50 to-pink-100",
    },
  ];

  // Floating elements for hero background
  const FloatingElement = ({ className, delay = 0 }) => (
    <div
      className={`absolute opacity-10 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Modern Static Background */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          {/* Large geometric shapes */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/25 to-blue-200/25 rounded-full blur-3xl"></div>
          
          {/* Floating elements */}
          <FloatingElement className="top-20 left-1/4" delay={0} />
          <FloatingElement className="top-40 right-1/3" delay={1} />
          <FloatingElement className="bottom-1/3 left-1/5" delay={2} />
          <FloatingElement className="bottom-20 right-1/4" delay={3} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center -mt-16">
          <div className="mb-8">
            <div className="relative">
              <AlertTriangle className="w-20 h-20 text-red-500 animate-pulse drop-shadow-xl" />
              <div className="absolute -inset-4 bg-red-100 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              ResQ Platform
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              AI-Powered Disaster Response & Management System
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              Connecting communities, predicting risks, and coordinating relief efforts through intelligent technology
            </p>
          </div>
          
          <div className="mt-12">
            <button
              onClick={() => setEmergencyModalOpen(true)}
              className="group px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
                Report Emergency
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Intelligent Disaster Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Harnessing cutting-edge technology to save lives and protect communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">24/7</h3>
              <p className="text-slate-600">Emergency Monitoring</p>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">&lt;2min</h3>
              <p className="text-slate-600">Response Time</p>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Global</h3>
              <p className="text-slate-600">Coverage Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Join the ResQ Network
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of our AI-powered disaster response ecosystem. Register as a
            volunteer, organization, or emergency responder and help build safer communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate("/Signup")}
              className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <Users className="w-5 h-5 group-hover:animate-pulse" />
                Register Now
              </span>
            </button>
            
            <button
              onClick={() => navigate("/SurvivalGuidance")}
              className="group px-10 py-4 bg-white border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <Brain className="w-5 h-5 group-hover:animate-pulse" />
                Survival Guidelines
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-white text-center">
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} ResQ Platform.</p>
            <p className="text-xs text-slate-400 mt-1">All rights reserved. Building safer communities through technology.</p>
          </div>
        </div>
      </div>

      {/* Emergency Modal */}
      {isEmergencyModalOpen && (
        <EmergencyModal
          isOpen={isEmergencyModalOpen}
          onClose={() => setEmergencyModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Landing;
