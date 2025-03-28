import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import styles from "./index.module.scss";

export const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};
