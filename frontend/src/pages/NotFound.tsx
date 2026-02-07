import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! Page not found</p>
        <Link to="/" className={styles.homeLink}>
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
