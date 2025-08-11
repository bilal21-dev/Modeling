import React, { useState } from 'react';

const HireForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    mobile: '',
    website: '',
    socialLink: '',
    modelCount: '',
    maleCount: '',
    femaleCount: '',
    shootCity: '',
    shootDate: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['contactName', 'mobile', 'modelCount', 'shootCity', 'shootDate'];
    const missingFields = [];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].toString().trim() === '') {
        missingFields.push(field);
      }
    });

    // Validate that at least one of maleCount or femaleCount is provided
    if ((!formData.maleCount || formData.maleCount === '0') && 
        (!formData.femaleCount || formData.femaleCount === '0')) {
      missingFields.push('maleCount/femaleCount');
    }

    return missingFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const missingFields = validateForm();
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        
        // Reset form
        setFormData({
          businessName: '',
          contactName: '',
          mobile: '',
          website: '',
          socialLink: '',
          modelCount: '',
          maleCount: '',
          femaleCount: '',
          shootCity: '',
          shootDate: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-50 to-white shadow-lg rounded-xl mt-6 mb-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hire Models</h2>
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input 
            type="text" 
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter business name" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Person Name *</label>
          <input 
            type="text" 
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter name" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile WhatsApp Number *</label>
          <input 
            type="tel" 
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter number" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Website</label>
          <input 
            type="url" 
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter website URL" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Provide any one Insta Account (Share link)/Facebook Page</label>
          <input 
            type="url" 
            name="socialLink"
            value={formData.socialLink}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter link" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How many models? *</label>
          <input 
            type="number" 
            name="modelCount"
            value={formData.modelCount}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter number" 
            min="1"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How many males & How many females? *</label>
          <div className="mt-1 flex space-x-4">
            <input 
              type="number" 
              name="maleCount"
              value={formData.maleCount}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded-lg bg-white" 
              placeholder="Males" 
              min="0"
            />
            <input 
              type="number" 
              name="femaleCount"
              value={formData.femaleCount}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded-lg bg-white" 
              placeholder="Females" 
              min="0"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shoot City *</label>
          <input 
            type="text" 
            name="shootCity"
            value={formData.shootCity}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter city" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shoot Dates *</label>
          <input 
            type="date" 
            name="shootDate"
            value={formData.shootDate}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            required 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Project Details</label>
          <textarea 
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white h-32" 
            placeholder="Describe your project, requirements, and any specific details about the models you need" 
          />
        </div>
        <div className="col-span-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full p-3 rounded-lg transition duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HireForm;