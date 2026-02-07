import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../context/CartContext";
import styles from "../styles/ProductListing.module.css";

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Backend returns { success, count, data: [...] }
        if (data.success && data.data) {
          // Add description field to match frontend Product interface
          const productsWithDescription = data.data.map((product: any) => ({
            ...product,
            description: `Beautiful ${product.name.toLowerCase()}`,
          }));
          setProducts(productsWithDescription);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className={styles.page}>
        <div className="container">
          <p style={{ textAlign: "center", padding: "2rem" }}>
            Loading products...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.page}>
        <div className="container">
          <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>
            Error: {error}. Make sure the backend server is running on port
            5000.
          </p>
        </div>
      </main>
    );
  }

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
