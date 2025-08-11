import React from 'react';

const Locations = () => {
  return (
    <section id="locations" className="py-12 bg-gray-100">
      <div className="text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">OUR LOCATIONS</h2>
        <div className="bg-gradient-to-r from-blue-900 to-black p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://media.istockphoto.com/id/184944186/fr/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=8sE1gGY_vFlNsXUIEwbi53RH17RbvCNj8Eb16sqB3XI=" 
                alt="Karachi" 
                className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
              />
              <h3 className="text-xl font-semibold text-white">Karachi</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/12912453/pexels-photo-12912453.jpeg" 
                alt="Lahore" 
                className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
              />
              <h3 className="text-xl font-semibold text-white">Lahore</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Faisal_Mosque_by_M_Ali_Mir.jpg/2560px-Faisal_Mosque_by_M_Ali_Mir.jpg" 
                alt="Islamabad" 
                className="w-full h-48 object-cover mx-auto mb-4 rounded-sm" 
              />
              <h3 className="text-xl font-semibold text-white">Islamabad</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;