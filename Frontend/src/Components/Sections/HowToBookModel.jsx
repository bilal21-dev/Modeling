import React from 'react';

const HowToBookModel = () => {
  return (
    <section id="how-to-book-model" className="py-12 bg-gray-100">
      <div className="text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">HOW TO BOOK A MODEL?</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Finding the perfect model for your campaign, event, or project has never been easier. Follow these simple steps to book a professional model through our agency:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-1-Submit-Requirements.jpg" 
              alt="Submit Requirements" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">1. Submit Your Requirements</h3>
            <p className="text-gray-600">
              Share the details of your project, including the type of campaign, target audience, and preferred model characteristics (age, gender, look, etc.).
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-2-Review-Models.jpg" 
              alt="Review Models" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">2. Review Female Models or Male</h3>
            <p className="text-gray-600">
              Browse our curated selection of professional female models and male models that match your project's needs, or let our team recommend top talent for you.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-3-Confirm-Booking.jpg" 
              alt="Confirm Booking" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">3. Confirm the Booking</h3>
            <p className="text-gray-600">
              Finalize the booking, agree on schedules, and coordinate logistics for a seamless collaboration.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://sparkmodeling.com/wp-content/uploads/2023/05/Step-4-Watch-Project-Shine.jpg" 
              alt="Watch Project Shine" 
              className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">4. Watch Your Project Shine</h3>
            <p className="text-gray-600">
              With a professional model representing your brand, you can focus on bringing your creative vision to life.
            </p>
          </div>
        </div>
        <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
          Book a Model
        </button>
      </div>
    </section>
  );
};

export default HowToBookModel;