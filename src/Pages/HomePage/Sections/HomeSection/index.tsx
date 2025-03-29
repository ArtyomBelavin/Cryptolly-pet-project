import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export const HomeSection: React.FC = () => {
  return (
    <section className={styles.HomepageSection}>
      <h1 className={styles.title}>
        A trusted and secure cryptocurrency exchange.
      </h1>
      <p className={styles.descr}>
        Your guide to the world of an open financial system. Get started with
        the easiest and most secure platform to buy and trade cryptocurrency.
      </p>

      <Link className={styles.link} to="/">
        Get Started Now
      </Link>
    </section>
  );
};
