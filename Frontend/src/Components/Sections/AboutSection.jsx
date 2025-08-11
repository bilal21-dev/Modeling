
import React from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-8 py-10"
    >
      <div className="text-center sm:text-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-base sm:text-lg text-gray-800 mb-6 font-bold leading-relaxed">
            SPARK MODELING IS TOP MODELING AGENCY IN PAKISTAN FOR GIRLS AND BOYS.
            WE PROVIDE MALE AND FEMALE MODELS WITH EXCELLENT BRAND SHOOTS, AD
            CAMPAIGNS, CATWALK OPPORTUNITIES, PRINT SHOOTS AND DIGITAL CAMPAIGNS
            IN LAHORE, ISLAMABAD, AND KARACHI. AS TOP MODELING AGENCIES IN
            PAKISTAN, WE GUARANTEE RELIABLE PARTNERS FOR HIGH-QUALITY
            ADVERTISING CAMPAIGNS.
          </p>

          <p className="text-sm sm:text-lg text-gray-600 mb-6 leading-relaxed">
            As one of the Best Modeling Agencies in Pakistan. Our vision is very
            clear, and that is to bring revolution in the Pakistani modeling
            industry by creating a transparent and modern environment for
            aspiring female and male models and talents. Our mission is concise,
            we aim to use the word Spark as a symbol of Pakistan's biggest
            modeling agency for girls, women and men. We are a forward-thinking,
            revolutionary modeling agency based in Karachi, Lahore, and
            Islamabad with a focus on providing wonderful female models and male
            models for Top Brand Shoots across Pakistan.
          </p>

          <Link to="/apply" className="bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 text-sm sm:text-base">
            Apply For Modeling Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
