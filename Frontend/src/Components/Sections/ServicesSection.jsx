import React from 'react';
import { Camera, Users, Star, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: "Model Representation",
      description: "Professional representation for aspiring and experienced models across fashion, commercial, and editorial markets."
    },
    {
      icon: <Camera className="w-12 h-12 text-cyan-500" />,
      title: "Photography Services", 
      description: "Connect with top photographers for portfolio shoots, campaigns, and editorial work."
    },
    {
      icon: <Star className="w-12 h-12 text-cyan-500" />,
      title: "Career Development",
      description: "Comprehensive training programs, coaching, and career guidance to maximize your potential."
    },
    {
      icon: <Award className="w-12 h-12 text-cyan-500" />,
      title: "Brand Partnerships",
      description: "Exclusive opportunities with leading brands and agencies looking for fresh talent."
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to help models build successful careers 
            and connect brands with the perfect talent for their projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Apply for Modeling</h3>
              <p className="mb-6">Ready to start your modeling career? Join our talent roster and get access to exclusive opportunities.</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Hire Models</h3>
              <p className="mb-6">Looking for professional models for your next project? Browse our diverse talent pool.</p>
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse Models
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
