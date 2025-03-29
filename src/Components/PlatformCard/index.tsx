import React from "react";
import styles from "./index.module.scss";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export const PlatformCard: React.FC<CardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.descr}>{description}</p>
    </div>
  );
};
