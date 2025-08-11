import express from 'express';
import multer from 'multer';
import path from 'path';
import { sendApplicationEmail } from '../config/email.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Validation middleware
const validateApplyForm = (req, res, next) => {
  const {
    fullName,
    mobile,
    age,
    gender,
    height,
    weight,
    waist,
    city,
    interested,
    experience
  } = req.body;

  const errors = [];

  // Required field validations
  if (!fullName || fullName.trim().length === 0) {
    errors.push('Full name is required');
  }

  if (!mobile || !/^\d{10,15}$/.test(mobile.replace(/\D/g, ''))) {
    errors.push('Valid mobile number is required');
  }

  if (!age || isNaN(age) || age < 1 || age > 100) {
    errors.push('Valid age is required');
  }

  if (!gender || !['female', 'man', 'child'].includes(gender)) {
    errors.push('Valid gender selection is required');
  }

  if (!height || isNaN(height) || height <= 0) {
    errors.push('Valid height is required');
  }

  if (!weight || isNaN(weight) || weight <= 0) {
    errors.push('Valid weight is required');
  }

  if (!waist || isNaN(waist) || waist <= 0) {
    errors.push('Valid waist measurement is required');
  }

  if (!city || city.trim().length === 0) {
    errors.push('City is required');
  }

  if (!interested || interested.trim().length === 0) {
    errors.push('Please select your area of interest');
  }

  if (!experience || experience.trim().length === 0) {
    errors.push('Please select your experience level');
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

// Submit application route
router.post('/apply', upload.array('pictures', 5), validateApplyForm, async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files;

    // Validate that at least 2 pictures are uploaded
    if (!files || files.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'At least 2 pictures are required'
      });
    }

    // Prepare attachments for email
    const attachments = files.map((file, index) => ({
      filename: `${formData.fullName}_photo_${index + 1}${path.extname(file.originalname)}`,
      content: file.buffer,
      contentType: file.mimetype
    }));
    //  console.log(formData,attachments)
    // Send email
    const emailResult = await sendApplicationEmail(formData, attachments);

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Application submitted successfully! We will contact you soon.',
        data: {
          messageId: emailResult.messageId,
          submittedAt: new Date().toISOString()
        }
      });
    } else {
      console.error('Email sending failed:', emailResult.error);
      res.status(500).json({
        success: false,
        message: 'Application received but email notification failed. We will still review your application.',
        error: 'Email service temporarily unavailable'
      });
    }

  } catch (error) {
    console.error('Application submission error:', error);
    
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Please upload images smaller than 5MB each.'
      });
    }

    if (error.message === 'Only image files are allowed') {
      return res.status(400).json({
        success: false,
        message: 'Only image files are allowed for photo uploads.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your application. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Apply service is running',
    timestamp: new Date().toISOString()
  });
});

export default router;
