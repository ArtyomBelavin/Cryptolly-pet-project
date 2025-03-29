import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

type navList = {
  id: number;
  text: string;
};

export const Header: React.FC = () => {
  const navList: navList[] = [
    {
      id: 0,
      text: "Exchange",
    },
    {
      id: 1,
      text: "Pricing",
    },
    {
      id: 2,
      text: "Wallet",
    },
    {
      id: 3,
      text: "Company",
    },
    {
      id: 4,
      text: "Blog",
    },
  ];

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="./logo.svg" alt="logo" />
      </Link>

      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          {navList.map((item) => (
            <li key={item.id} className={styles.headerNavListItem}>
              <Link className={styles.link} to="/">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.headerBtns}>
        <Link className={styles.headerSignIn} to="/">
          Sign In
        </Link>
        <Link className={styles.headerGetStarted} to="/">
          Get Started
        </Link>
      </div>
    </header>
  );
};
