const express = require("express");
const { getAllProducts } = require("../controllers/productController");

// Create router instance
const router = express.Router();

// GET /products - Get all products
router.get("/", getAllProducts);

// Export the router
module.exports = router;
