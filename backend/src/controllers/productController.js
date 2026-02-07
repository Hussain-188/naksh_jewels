const products = require("../data/products");

/**
 * Get all products
 * @route GET /products
 */
const getAllProducts = (req, res, next) => {
  try {
    // Fetch all products from in-memory data
    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    // Return products as JSON
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    // Handle unexpected errors gracefully
    next(error);
  }
};

module.exports = {
  getAllProducts,
};
