const { body } = require('express-validator');

// Validation rules for booking creation
exports.bookingValidationRules = [
  // Full Name validation
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ max: 100 }).withMessage('Full name cannot be more than 100 characters'),
    
  // Phone Number validation
  body('phoneNumber')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[0-9\-\+\s()]*$/).withMessage('Please enter a valid phone number'),
    
  // Email validation
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
    
  // Date validation
  body('date')
    .notEmpty().withMessage('Date is required')
    .isISO8601().withMessage('Please enter a valid date')
    .custom((value) => {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        throw new Error('Date cannot be in the past');
      }
      return true;
    }),
    
  // Time validation
  body('time')
    .notEmpty().withMessage('Time is required')
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Please enter a valid time in HH:MM format'),
    
  // Adults validation
  body('adults')
    .notEmpty().withMessage('Number of adults is required')
    .isInt({ min: 1, max: 20 }).withMessage('Number of adults must be between 1 and 20'),
    
  // Children validation
  body('children')
    .optional({ checkFalsy: true })
    .isInt({ min: 0 }).withMessage('Number of children cannot be negative'),
    
  // Message validation
  body('message')
    .optional({ checkFalsy: true })
    .isLength({ max: 1000 }).withMessage('Message cannot be more than 1000 characters')
];
