import express from 'express';
import { sendHireRequestEmail } from '../config/email.js';

const router = express.Router();

// Validation middleware
const validateHireForm = (req, res, next) => {
  const {
    contactName,
    mobile,
    modelCount,
    maleCount,
    femaleCount,
    shootCity,
    shootDate
  } = req.body;

  const errors = [];

  // Required field validations
  if (!contactName || contactName.trim().length === 0) {
    errors.push('Contact name is required');
  }

  if (!mobile || !/^\d{10,15}$/.test(mobile.replace(/\D/g, ''))) {
    errors.push('Valid mobile number is required');
  }

  if (!modelCount || isNaN(modelCount) || modelCount < 1) {
    errors.push('Valid model count is required');
  }

  // Validate that at least one of maleCount or femaleCount is provided
  if ((!maleCount || maleCount === '0' || isNaN(maleCount)) && 
      (!femaleCount || femaleCount === '0' || isNaN(femaleCount))) {
    errors.push('At least one male or female model count is required');
  }

  if (!shootCity || shootCity.trim().length === 0) {
    errors.push('Shoot city is required');
  }

  if (!shootDate) {
    errors.push('Shoot date is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

// Submit hire request route
router.post('/hire', validateHireForm, async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData)
    // Send email
    const emailResult = await sendHireRequestEmail(formData);
    
    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Your model hire request has been submitted successfully! We will contact you soon.',
        data: {
          messageId: emailResult.messageId,
          submittedAt: new Date().toISOString()
        }
      });
    } else {
      console.error('Email sending failed:', emailResult.error);
      res.status(500).json({
        success: false,
        message: 'Request received but email notification failed. We will still review your request.',
        error: 'Email service temporarily unavailable'
      });
    }

  } catch (error) {
    console.error('Hire request submission error:', error);
    
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hire service is running',
    timestamp: new Date().toISOString()
  });
});

export default router;