const { body, validationResult } = require("express-validator");

/**
 * Validation rules for adding items to cart
 */
const validateCartInput = [
  // Validate productId is a number
  body("productId")
    .notEmpty()
    .withMessage("Product ID is required")
    .isNumeric()
    .withMessage("Product ID must be a number")
    .isInt({ min: 1 })
    .withMessage("Product ID must be a positive integer"),

  // Validate quantity is a positive integer
  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isNumeric()
    .withMessage("Quantity must be a number")
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),

  // Middleware to check validation results
  (req, res, next) => {
    const errors = validationResult(req);

    // Return 400 status with error messages if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    next();
  },
];

module.exports = {
  validateCartInput,
};
