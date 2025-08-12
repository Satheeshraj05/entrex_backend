# Entrex Backend

## Overview
Entrex Backend is a robust Node.js/Express.js application that serves as the backend for the Entrex platform. It provides RESTful API endpoints for managing bookings and related operations. The application is built with modern JavaScript and follows the MVC (Model-View-Controller) architecture pattern.

## Features

- **RESTful API** - Clean and consistent API endpoints following REST principles
- **MongoDB Integration** - Uses Mongoose for database operations with MongoDB
- **Input Validation** - Implements express-validator for request validation
- **CORS Support** - Built-in CORS support for cross-origin requests
- **Environment Configuration** - Uses dotenv for environment variable management
- **Error Handling** - Comprehensive error handling middleware
- **Date Handling** - Utilizes date-fns for reliable date manipulations

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Validation**: express-validator
- **Date Handling**: date-fns
- **Environment Management**: dotenv
- **CORS**: cors middleware

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Request handlers
├── middleware/       # Custom middleware
├── models/           # Database models
├── routes/           # Route definitions
└── server.js         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Satheeshraj05/entrex_backend.git
   cd entrex_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the environment variables:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run server
   ```

   The server will start on `http://localhost:3000` by default.

## API Documentation

### Base URL
`http://localhost:3000/api`

### Available Endpoints

#### Bookings
- `GET /bookings` - Get all bookings
- `POST /bookings` - Create a new booking
- `GET /bookings/:id` - Get a specific booking
- `PUT /bookings/:id` - Update a booking
- `DELETE /bookings/:id` - Delete a booking

## Development

### Scripts

- `npm start` - Start the production server
- `npm run server` - Start the development server with nodemon
- `npm test` - Run tests (to be implemented)

### Environment Variables

- `PORT` - Port number for the server (default: 3000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Application environment (development/production)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact the project maintainers.
