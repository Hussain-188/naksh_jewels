/**
 * Centralized error handling middleware
 * This should be the last middleware in the app
 */
const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  // Get status code from error object or default to 500
  const statusCode = err.statusCode || err.status || 500;

  // Get error message or use default
  const message = err.message || "Internal Server Error";

  // Return JSON response with status code and error message
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      statusCode: statusCode,
      // Include stack trace only in development mode
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
};

module.exports = errorHandler;
