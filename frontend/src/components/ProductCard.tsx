import React, { useState } from "react";
import { Product, useCart } from "../context/CartContext";
import styles from "../styles/ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <button
            className={`${styles.addButton} ${isAdded ? styles.added : ""}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <svg
              className={styles.addIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
