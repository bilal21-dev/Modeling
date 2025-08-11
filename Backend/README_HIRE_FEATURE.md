# Hire Model Feature Documentation

## Overview
The Hire Model feature allows clients to submit requests to hire models for photoshoots, commercials, and other projects. This document outlines the implementation details of this feature.

## Frontend Implementation

### Components
- **hire.jsx**: Banner component for the hire page
- **hireForm.jsx**: Form component for submitting hire requests
- **main.jsx**: Main component that combines the hire components

### Form Fields
- Business Name
- Contact Person Name (required)
- Mobile WhatsApp Number (required)
- Business Website
- Social Media Link
- Number of Models (required)
- Male/Female Count (at least one required)
- Shoot City (required)
- Shoot Date (required)
- Project Details

## Backend Implementation

### Routes
- **POST /api/hire**: Submits a hire request
- **GET /api/hire/health**: Health check endpoint

### Validation
The backend validates the following fields:
- Contact Person Name
- Mobile Number
- Model Count
- Male/Female Count (at least one must be provided)
- Shoot City
- Shoot Date

### Email Notification
When a hire request is submitted, an email is sent to the administrator with the following information:
- Business details
- Contact information
- Model requirements
- Shoot details
- Project details

## Configuration
The email functionality uses the same configuration as the Apply feature, utilizing the following environment variables:
- GMAIL_USER
- GMAIL_APP_PASSWORD
- ADMIN_EMAIL (optional, defaults to GMAIL_USER)

## Usage
1. Client fills out the hire form on the frontend
2. Form is validated on both frontend and backend
3. If valid, the request is processed and an email is sent to the administrator
4. Client receives a success message

## Error Handling
- Form validation errors are displayed to the user
- Server errors are logged and a user-friendly message is displayed
- Email sending failures are handled gracefully