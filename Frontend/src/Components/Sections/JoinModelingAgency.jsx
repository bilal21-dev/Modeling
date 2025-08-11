import React from 'react';
import { Link } from 'react-router-dom';

const JoinModelingAgency = () => {
  return (
    <section id="join-modeling-agency" className="py-12 bg-white flex items-center justify-center">
      <div className="text-center px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">JOIN SPARK MODELING AGENCY NOW! TOP MODELING AGENCY IN KARACHI, LAHORE AND ISLAMABAD PAKISTAN.</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Become a model: A dream of many young girls, women and men. Living in glamour and luxury, wearing expensive designer collections, visiting the most beautiful places in the world, knowing the right people and looking incredibly good. Who doesn't want that? That can't be hard, many suspect. With the right modeling agency in Lahore and Karachi, Pakistan this can be achieved. But behind such a career is much more than just being 'beautiful!' Incredibly much work, talent and finally also some 'luck'. No human being is born as a model - well maybe isolated cases, but these are absolute exceptions.
          </p>
          <p className="text-gray-600 mb-6 max-w-md">
            Basically, modeling is a full-time job that requires a lot of sweat, discipline and passion. At best, a good dose of cleverness and intelligence. Because even as a model, you're a businesswoman or a businessman. What is basically behind the profession of a photo model?
          </p>
          <Link to="/apply" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
            Apply for Modeling Now!
          </Link>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="https://www.elahe.in/cdn/shop/files/324_4665e946-f1bf-47a9-b1ca-6a69be73f46e_2048x.jpg?v=1720080850" 
            alt="Model" 
            className="w-full h-auto object-cover rounded-sm" 
          />
        </div>
      </div>
    </section>
  );
};

export default JoinModelingAgency;