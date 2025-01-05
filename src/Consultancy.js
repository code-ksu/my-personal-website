import React from 'react';
import { Link } from 'react-router-dom';

function Consultancy() {
  const services = [
    {
      title: "Strategy Development",
      description: "Custom-tailored strategies to drive your business growth and market position.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20" />
          <path d="M5 20V8.2c0-.4.3-.8.7-.9l.2-.1c.3-.1.6-.1.9.1l3.6 2.9c.3.2.7.2 1 0l3.6-2.9c.3-.2.6-.2.9-.1l.2.1c.4.1.7.5.7.9V20" />
          <path className="animate-pulse" d="M18 20V4l-2.1 2.1" />
          <path className="animate-pulse" d="M15.9 6.1L18 4" />
        </svg>
      )
    },
    {
      title: "Growth Solutions",
      description: "Data-driven approaches to scale your business and expand market reach.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" className="animate-bounce" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
          <path d="M22 19h-4" />
          <path d="M2 19h4" />
          <path d="M22 5h-4" />
          <path d="M2 5h4" />
        </svg>
      )
    },
    {
      title: "Business Analysis",
      description: "In-depth analysis of your business processes and opportunities for optimization.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" className="animate-ping opacity-75" />
        </svg>
      )
    },
    {
      title: "Digital Transformation",
      description: "Guide your business through digital evolution and technological advancement.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path className="animate-pulse" d="M6 8h.01M6 12h.01M6 16h.01M9 8h6M9 12h6M9 16h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-50/50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Strategy and Growth Solutions for Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business challenges into opportunities with data-driven strategies and actionable insights.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Get Started
                </Link>
                <a
                  href="#services"
                  className="border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
              <img
                src="/images/consultancy.jpg"
                alt="Business Strategy Consultant"
                className="relative z-10 rounded-lg shadow-xl w-full max-w-md mx-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-teal-700 text-white rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to create strategies that drive real results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
