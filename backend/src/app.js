const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Enable JSON body parsing

// Base route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Naksh Jewels API",
    version: "1.0.0",
  });
});

// Mount routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Centralized error handling middleware (must be last)
app.use(errorHandler);

// Server configuration
const PORT = process.env.PORT || 5000;

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing or external use
module.exports = app;
