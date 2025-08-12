const express = require('express');
const { body, validationResult } = require('express-validator');
const { createBooking, getBookings } = require('../controllers/bookingController');

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation rules
const bookingValidationRules = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ max: 100 }).withMessage('Full name cannot be more than 100 characters'),
    
  body('phoneNumber')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[0-9\-\+\s()]*$/).withMessage('Please enter a valid phone number'),
    
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
    
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
    
  body('time')
    .notEmpty().withMessage('Time is required')
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Please enter a valid time in HH:MM format'),
    
  body('adults')
    .notEmpty().withMessage('Number of adults is required')
    .isInt({ min: 1, max: 20 }).withMessage('Number of adults must be between 1 and 20'),
    
  body('children')
    .optional({ checkFalsy: true })
    .isInt({ min: 0 }).withMessage('Number of children cannot be negative'),
    
  body('message')
    .optional({ checkFalsy: true })
    .isLength({ max: 1000 }).withMessage('Message cannot be more than 1000 characters')
];

// @route   POST api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', bookingValidationRules, validate, createBooking);

// @route   GET api/bookings
// @desc    Get all bookings
// @access  Public
router.get('/', getBookings);

module.exports = router;
