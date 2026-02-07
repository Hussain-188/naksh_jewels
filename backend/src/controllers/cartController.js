const products = require("../data/products");

// In-memory cart storage
let cart = [];

/**
 * Add item to cart or update quantity
 * @route POST /cart
 */
const addToCart = (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    // Validate inputs
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive number",
      });
    }

    if (!Number.isInteger(quantity)) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be an integer",
      });
    }

    // Check if product exists
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(
      (item) => item.productId === parseInt(productId),
    );

    if (existingItemIndex !== -1) {
      // Update quantity if product already in cart
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push({
        productId: parseInt(productId),
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
    }

    // Calculate cart totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    // Return updated cart
    res.status(200).json({
      success: true,
      message: "Product added to cart successfully",
      data: {
        cart: cart,
        totalItems: totalItems,
        totalPrice: totalPrice,
      },
    });
  } catch (error) {
    // Handle errors properly
    next(error);
  }
};

module.exports = {
  addToCart,
};
