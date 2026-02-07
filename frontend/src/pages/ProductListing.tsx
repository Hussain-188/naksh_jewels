import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import styles from '../styles/ProductListing.module.css';

const ProductListing: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Our Products</h1>
          <p className={styles.subtitle}>
            Curated essentials for modern living
          </p>
        </header>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductListing;
