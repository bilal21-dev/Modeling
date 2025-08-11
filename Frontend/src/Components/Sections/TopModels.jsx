import React from 'react';

const TopModels = () => {
  const images = [
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-1.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-2.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-3.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-4.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-5.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-6.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-7.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-22.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-1.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-2.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-3.jpg",
    "https://sparkmodeling.com/wp-content/uploads/2023/05/Spark-Modeling-Agency-Pakistan-Portfolio-4.jpg",
  ];

  return (
    <section id="top-models" className="py-12 bg-white">
      <div className="text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          FEW OF OUR TOP FEMALE MODELS AND MALE TALENTS
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Our Male and Female Model Library is a compilation of Top Female model as well as Best
          Male Talents. The library is updated regular and includes images from audition of
          models or portfolio of models done by our team of photographers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-sm" // Keeps container fixed
            >
              <img
                src={src}
                alt={`Model ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopModels;
