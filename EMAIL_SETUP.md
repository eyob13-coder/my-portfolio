# Email Setup Guide

## Setting up the Contact Form

To enable the contact form functionality, you need to configure your email credentials:

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail App Password Setup

If you're using Gmail, you'll need to generate an App Password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled
4. Go to App Passwords
5. Generate a new app password for "Mail"
6. Use this password in your `EMAIL_PASS` variable

### 3. Alternative Email Services

You can also use other email services by modifying the transporter configuration in `app/api/contact/route.ts`:

```typescript
// For Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// For custom SMTP
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Testing

After setup, test the contact form by:
1. Running your development server
2. Filling out the contact form
3. Checking your email for the submission

### 5. Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of regular passwords
- Consider rate limiting for production use
- Validate email inputs on both client and server side

## Troubleshooting

If emails aren't sending:

1. Check your environment variables are loaded
2. Verify your email credentials are correct
3. Check the browser console and server logs for errors
4. Ensure your email service allows SMTP access
5. Check if your email service has anti-spam measures 