import React from 'react';

const HireForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-50 to-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hire Models</h2>
      <form className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter business name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Person Name *</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile WhatsApp Number *</label>
          <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter number" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Website</label>
          <input type="url" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter website URL" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Provide any one Insta Account (Share link)/Facebook Page</label>
          <input type="url" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter link" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How many models? *</label>
          <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter number" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How many males & How many females? *</label>
          <div className="mt-1 flex space-x-4">
            <input type="number" className="w-1/2 p-2 border border-gray-300 rounded-lg bg-white" placeholder="Males" required />
            <input type="number" className="w-1/2 p-2 border border-gray-300 rounded-lg bg-white" placeholder="Females" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shoot City *</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter city" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shoot Dates *</label>
          <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" required />
        </div>
        <div className="col-span-2">
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default HireForm;