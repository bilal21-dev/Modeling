# Modeling Application Email Feature

This feature allows users to submit modeling applications through your website, which are automatically sent to the admin's Gmail using Nodemailer.

## Setup Instructions

### Backend Setup

1. **Install Dependencies**
   ```bash
   cd Backend
   npm install nodemailer
   ```

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Fill in your Gmail credentials:
     ```env
     GMAIL_USER=your_gmail_address@gmail.com
     GMAIL_APP_PASSWORD=your_gmail_app_password
     ADMIN_EMAIL=admin@yourcompany.com
     ```

3. **Gmail App Password Setup**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification (enable if not already)
   - At the bottom, select "App passwords"
   - Select "Mail" as the app and generate a password
   - Use this generated password as `GMAIL_APP_PASSWORD` (NOT your regular Gmail password)

4. **Start the Backend Server**
   ```bash
   npm run dev
   ```

### Frontend Setup

The React form has been updated with:
- Form state management
- Input validation
- File upload handling
- Success/error messaging
- Loading states during submission

### Features Included

#### Backend Features:
- **Email Configuration**: Automated email sending using Nodemailer
- **File Upload**: Handles image uploads with validation (2-5 images, max 5MB each)
- **Form Validation**: Server-side validation for all required fields
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **Security**: Environment variables for sensitive credentials

#### Frontend Features:
- **Form State Management**: React state for all form fields
- **Real-time Validation**: Client-side validation before submission
- **File Upload**: Multiple image upload with preview count
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: User-friendly feedback after submission
- **Form Reset**: Automatic form clearing after successful submission

#### Email Template Features:
- **Professional Design**: HTML email template with styling
- **Complete Data Display**: All form fields formatted nicely
- **Image Attachments**: Photos are attached to the email
- **Timestamp**: Submission date and time included
- **Responsive Design**: Email looks good on mobile and desktop

### API Endpoints

- `POST /api/apply` - Submit modeling application
- `GET /api/health` - Health check for the apply service

### Form Fields Validated:
- Full Name (required)
- Mobile/WhatsApp Number (required, 10-15 digits)
- Age (required, 1-100)
- Gender (required, dropdown)
- Height in Feet (required, positive number)
- Weight in Kg (required, positive number)
- Waist in Inches (required, positive number)
- City (required)
- Areas of Interest (required, at least one checkbox)
- Experience Level (required, at least one checkbox)
- Pictures (required, 2-5 images, max 5MB each)

### Error Handling

The system handles various error scenarios:
- Network connectivity issues
- File upload errors (size, format, count)
- Form validation errors
- Email service failures
- Server errors

### Security Considerations

- Environment variables for sensitive data
- File upload restrictions (type, size, count)
- Input validation and sanitization
- CORS configuration for frontend-backend communication

### Testing

1. Start both backend and frontend servers
2. Fill out the form with test data
3. Upload 2-5 image files
4. Submit the form
5. Check your configured admin email for the application

### Troubleshooting

**Common Issues:**
1. **Email not sending**: Check Gmail app password and credentials
2. **File upload fails**: Ensure files are images and under 5MB
3. **Form validation errors**: Check all required fields are filled
4. **CORS errors**: Ensure backend CORS is configured properly

**Gmail App Password Issues:**
- Make sure 2-Step Verification is enabled
- Use the generated app password, not your regular password
- Check that the email address in GMAIL_USER is correct
