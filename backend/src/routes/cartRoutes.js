const express = require("express");
const { addToCart } = require("../controllers/cartController");
const { validateCartInput } = require("../middleware/validateCart");

// Create router instance
const router = express.Router();

// POST /cart - Add item to cart with validation
router.post("/", validateCartInput, addToCart);

// Export the router
module.exports = router;
