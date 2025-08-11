import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use app password, not regular password
    },
  });
};

// Format form data into HTML email template
const formatApplyFormEmail = (formData) => {
  const { 
    interested, 
    experience, 
    gender, 
    mobile, 
    fullName, 
    age, 
    height, 
    waist, 
    weight, 
    city 
  } = formData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
        .value { color: #333; }
        .interests, .experience-level { background: #e3f2fd; padding: 8px; border-radius: 4px; margin-top: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Modeling Application Received</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Full Name:</span>
            <span class="value">${fullName || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Mobile/WhatsApp:</span>
            <span class="value">${mobile || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Age:</span>
            <span class="value">${age || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Gender:</span>
            <span class="value">${gender || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">City:</span>
            <span class="value">${city || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Height (Feet):</span>
            <span class="value">${height || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Weight (Kg):</span>
            <span class="value">${weight || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Waist (Inches):</span>
            <span class="value">${waist || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Interested In:</span>
            <div class="interests">
              ${interested || 'Not specified'}
            </div>
          </div>
          
          <div class="field">
            <span class="label">Experience Level:</span>
            <div class="experience-level">
              ${experience || 'Not specified'}
            </div>
          </div>
          
          <div class="footer">
            <p>This application was submitted through your modeling website.</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Format hire request data into HTML email template
const formatHireRequestEmail = (formData) => {
  const { 
    businessName,
    contactName,
    mobile,
    website,
    socialLink,
    modelCount,
    maleCount,
    femaleCount,
    shootCity,
    shootDate,
    projectDetails
  } = formData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
        .value { color: #333; }
        .project-details { background: #e3f2fd; padding: 12px; border-radius: 4px; margin-top: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Model Hire Request</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Business Name:</span>
            <span class="value">${businessName || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Contact Person:</span>
            <span class="value">${contactName || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Mobile/WhatsApp:</span>
            <span class="value">${mobile || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Business Website:</span>
            <span class="value">${website || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Social Media:</span>
            <span class="value">${socialLink || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Total Models:</span>
            <span class="value">${modelCount || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Male Models:</span>
            <span class="value">${maleCount || '0'}</span>
          </div>
          
          <div class="field">
            <span class="label">Female Models:</span>
            <span class="value">${femaleCount || '0'}</span>
          </div>
          
          <div class="field">
            <span class="label">Shoot City:</span>
            <span class="value">${shootCity || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Shoot Date:</span>
            <span class="value">${shootDate || 'Not provided'}</span>
          </div>
          
          <div class="field">
            <span class="label">Project Details:</span>
            <div class="project-details">
              ${projectDetails || 'No details provided'}
            </div>
          </div>
          
          <div class="footer">
            <p>This request was submitted through your modeling website.</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send application email
const sendApplicationEmail = async (formData, attachments = []) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Modeling Application from ${formData.fullName || 'Unknown'}`,
      html: formatApplyFormEmail(formData),
      attachments: attachments
    };
  

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

// Send hire request email
const sendHireRequestEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Model Hire Request from ${formData.contactName || 'Unknown'}`,
      html: formatHireRequestEmail(formData)
    };
  
    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

export { sendApplicationEmail, sendHireRequestEmail };
