const Booking = require('../models/booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
exports.createBooking = async (req, res) => {
  try {

    const { fullName, phoneNumber, email, date, time, adults, children, message } = req.body;
    
    // Create new booking
    const booking = new Booking({
      fullName,
      phoneNumber,
      email,
      date,
      time,
      adults: parseInt(adults),
      children: parseInt(children) || 0,
      message: message || ''
    });

    await booking.save();

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
