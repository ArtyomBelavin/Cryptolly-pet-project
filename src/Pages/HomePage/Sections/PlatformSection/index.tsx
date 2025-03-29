import React from "react";
import styles from "./index.module.scss";
import { PlatformCard } from "../../../../Components/PlatformCard";
import Graph from "../../../../Assets/vectors/Graph.svg";
import Mobile from "../../../../Assets/vectors/mobile.svg";
import Lock from "../../../../Assets/vectors/Lock.svg";

export const PlatformSection: React.FC = () => {
  return (
    <section className={styles.platformSection}>
      <h2 className={styles.title}>
        The most trusted <br /> cryptocurrency platform.
      </h2>
      <p className={styles.descr}>
        Cryptolly has a variety of features that make it the best <br /> place
        to start trading
      </p>

      <div className={styles.platformContainer}>
        <PlatformCard
          image={Graph}
          title="Portfolio Manager"
          description="Buy and sell popular digital currencies, keep track of them in the one place."
        />
        <PlatformCard
          image={Mobile}
          title="Mobile Apps"
          description="Stay on top of the markets with the Cryptolly app for Android or iOS."
        />
        <PlatformCard
          image={Lock}
          title="Vault protection"
          description="For added security, store your funds in a vault with time delayed withdrawals."
        />
      </div>
    </section>
  );
};
