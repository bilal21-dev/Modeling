import React from 'react';

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-10 text-center">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">FEW STATS ABOUT SPARK MODELING AGENCY</h2>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 sm:space-x-32 mb-4 sm:mb-6">
        <div>
          <p className="text-4xl sm:text-7xl font-bold text-gray-700">000+</p>
          <p className="text-gray-500">Models</p>
        </div>
        <div>
          <p className="text-4xl sm:text-7xl font-bold text-gray-700">00+</p>
          <p className="text-gray-500">Talents</p>
        </div>
        <div>
          <p className="text-4xl sm:text-7xl font-bold text-gray-700">000+</p>
          <p className="text-gray-500">Projects</p>
        </div>
      </div>
      <button className="bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800">
        Visit Home Page
      </button>
    </div>
  );
};

export default Stats;