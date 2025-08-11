import React from 'react';
import { Link } from 'react-router-dom';

const HowToJoin = () => {
  return (
    <section id="how-to-join" className="py-12 bg-white">
      <div className="text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">HOW TO JOIN SPARK - BEST MODELING AGENCY IN LAHORE, KARACHI, AND ISLAMABAD?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-1-Apply-Now.jpg" 
              alt="Apply Now" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">1. APPLY ON OUR WEBSITE</h3>
            <p className="text-gray-600">
              Upload Pictures, Discover and Customize your interest, show your Talent for a Model and Casting Professional.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-2-Audition-or-Portfolio-Shoot.jpg" 
              alt="Audition or Portfolio Shoot" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">2. AUDITION OR PORTFOLIO SHOOT</h3>
            <p className="text-gray-600">
              Soon after your online application on our website, our team will contact you and line up for Audition and if necessary for Portfolio shoot.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-3-Get-Cast.jpg" 
              alt="Get Cast" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">3. GET CAST</h3>
            <p className="text-gray-600">
              Explore your interest, Apply for Cast, Audition, Get Cast. Repeat this Process if Necessary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;