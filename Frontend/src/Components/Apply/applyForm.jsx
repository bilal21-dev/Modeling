import React, { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    waist: '',
    city: '',
    interested: '',
    experience: ''
  });

  const [files, setFiles] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length < 2) {
      alert('Please select at least 2 pictures');
      return;
    }
    if (selectedFiles.length > 5) {
      alert('Please select no more than 5 pictures');
      return;
    }
    setFiles(selectedFiles);
  };

  const validateForm = () => {
    const requiredFields = ['fullName', 'mobile', 'age', 'gender', 'height', 'weight', 'waist', 'city'];
    const missingFields = [];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].toString().trim() === '') {
        missingFields.push(field);
      }
    });

    if (!formData.interested || formData.interested.trim() === '') {
      missingFields.push('interested');
    }

    if (!formData.experience || formData.experience.trim() === '') {
      missingFields.push('experience');
    }

    if (!files || files.length < 2) {
      missingFields.push('pictures');
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
      const submitData = new FormData();
      
      // Append form data
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      // Append files
      for (let i = 0; i < files.length; i++) {
        submitData.append('pictures', files[i]);
      }

      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        
        // Reset form
        setFormData({
          fullName: '',
          mobile: '',
          age: '',
          gender: '',
          height: '',
          weight: '',
          waist: '',
          city: '',
          interested: '',
          experience: ''
        });
        setFiles(null);
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
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
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-xl mt-6 mb-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply for Modeling</h2>
      
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
          <label className="block text-sm font-medium text-gray-700">Interested in *</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="interested" 
                value="brand-shoots" 
                className="mr-2 accent-blue-600"
                checked={formData.interested === 'brand-shoots'}
                onChange={handleInputChange}
              />
              Modeling (Brand Shoots)
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="interested" 
                value="commercials" 
                className="mr-2 accent-blue-600"
                checked={formData.interested === 'commercials'}
                onChange={handleInputChange}
              />
              Commercials (TVC, DVC)
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="interested" 
                value="acting" 
                className="mr-2 accent-blue-600"
                checked={formData.interested === 'acting'}
                onChange={handleInputChange}
              />
              Acting (TV, Digital)
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Fresh or Experienced *</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="experience" 
                value="fresh" 
                className="mr-2 accent-blue-600"
                checked={formData.experience === 'fresh'}
                onChange={handleInputChange}
              />
              Fresh
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="experience" 
                value="experienced" 
                className="mr-2 accent-blue-600"
                checked={formData.experience === 'experienced'}
                onChange={handleInputChange}
              />
              Experienced
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender *</label>
          <select 
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white"
            required
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="man">Man</option>
            <option value="child">Child</option>
          </select>
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
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Age *</label>
          <input 
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter age"
            min="1"
            max="100"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (Feet) *</label>
          <input 
            type="number" 
            step="0.1" 
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter height"
            min="0"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Waist (Inches) *</label>
          <input 
            type="number" 
            step="0.1" 
            name="waist"
            value={formData.waist}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter waist"
            min="0"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (Kg) *</label>
          <input 
            type="number" 
            step="0.1" 
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter weight"
            min="0"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">City *</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            placeholder="Enter city"
            required
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">2 Pictures Upload * (Min: 2, Max: 5)</label>
          <input 
            type="file" 
            multiple 
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-white" 
            accept="image/*"
            required
          />
          {files && (
            <p className="mt-1 text-sm text-gray-600">
              {files.length} file{files.length !== 1 ? 's' : ''} selected
            </p>
          )}
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
            {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;