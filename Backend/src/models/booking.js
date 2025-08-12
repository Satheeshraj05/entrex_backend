const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot be more than 100 characters']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9\-\+\s()]*$/, 'Please enter a valid phone number']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  time: {
    type: String,
    required: [true, 'Time is required']
  },
  adults: {
    type: Number,
    required: [true, 'Number of adults is required'],
    min: [1, 'At least one adult is required'],
    max: [20, 'Maximum 20 adults allowed']
  },
  children: {
    type: Number,
    required: [true, 'Number of children is required'],
    min: [0, 'Number of children cannot be negative'],
    default: 0
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for frequently queried fields
bookingSchema.index({ email: 1, date: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);
