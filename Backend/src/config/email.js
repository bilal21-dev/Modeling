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

export { sendApplicationEmail };
