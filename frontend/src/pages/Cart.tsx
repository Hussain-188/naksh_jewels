import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import styles from '../styles/Cart.module.css';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const shipping = totalItems > 0 ? 9.99 : 0;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Your Cart</h1>
          </header>

          <div className={styles.emptyState}>
            <svg
              className={styles.emptyIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>
              Looks like you haven't added any items yet.
            </p>
            <Link to="/" className={styles.continueLink}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Your Cart</h1>
        </header>

        <div className={styles.content}>
          <div className={styles.itemsList}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>
                Subtotal ({totalItems} items)
              </span>
              <span className={styles.summaryValue}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Shipping</span>
              <span className={styles.summaryValue}>
                ${shipping.toFixed(2)}
              </span>
            </div>

            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Tax (8%)</span>
              <span className={styles.summaryValue}>
                ${tax.toFixed(2)}
              </span>
            </div>

            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span className={styles.summaryLabel}>Total</span>
              <span className={styles.summaryValue}>
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>

            <button className={styles.clearButton} onClick={clearCart}>
              Clear Cart
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
