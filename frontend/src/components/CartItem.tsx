import React from "react";
import { CartItem as CartItemType, useCart } from "../context/CartContext";
import styles from "../styles/CartItem.module.css";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.name} className={styles.image} />
      </div>

      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>
          ₹{item.price.toLocaleString("en-IN")} each
        </p>

        <div className={styles.actions}>
          <div className={styles.quantityControl}>
            <button
              className={styles.quantityButton}
              onClick={() => decreaseQuantity(item.id)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className={styles.quantity}>{item.quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() => increaseQuantity(item.id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            className={styles.removeButton}
            onClick={() => removeFromCart(item.id)}
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg
              className={styles.removeIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Remove</span>
          </button>

          <span className={styles.subtotal}>
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
