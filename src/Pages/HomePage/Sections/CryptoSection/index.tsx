import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useCryptoStore } from "../../../../Store/useCryptoStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ArrowDown from "../../../../Assets/vectors/ArrowDown.svg";
import ArrowUp from "../../../../Assets/vectors/ArrowUp.svg";
import { Link } from "react-router-dom";

export const CryptoSection: React.FC = () => {
  const { cryptos, fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);
  return (
    <section className={styles.cryptoSecion}>
      {cryptos.map((crypto) => (
        <div key={crypto.id} className={styles.cryptoCard}>
          <div className={styles.cryptoHeader}>
            <img
              className={styles.cryptoImage}
              src={crypto.image}
              alt={crypto.name}
            />
            <div className={styles.cryptoHeaderText}>
              <h3 className={styles.title}>
                {crypto.name} ({crypto.symbol})
              </h3>
              <p className={styles.price}>USD {crypto.price.toFixed(2)}</p>
            </div>
          </div>

          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height={50}>
              <LineChart data={crypto.chartData}>
                <XAxis dataKey="time" hide />
                <YAxis domain={["auto", "auto"]} hide />
                <Tooltip
                  formatter={(value) => [
                    `$${Number(value).toFixed(2)}`,
                    "Price",
                  ]}
                  contentStyle={{
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke={crypto.change >= 0 ? "#11cabe" : "#FA2256"} // Цвет в зависимости от изменения
                  strokeWidth={1}
                  dot={false} // Убираем точки
                />
              </LineChart>
            </ResponsiveContainer>

            {crypto.change >= 0 ? (
              <div className={styles.arrowContainer}>
                <img src={ArrowUp} alt="ArrowUp" />
                <p className={styles.positive}>{crypto.change.toFixed(2)}%</p>
              </div>
            ) : (
              <div className={styles.arrowContainer}>
                <img src={ArrowDown} alt="ArrowDown" />
                <p className={styles.negative}>{crypto.change.toFixed(2)}%</p>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className={styles.cryptoCardView}>
        <Link className={styles.cryptoCardLink} to="/">
          View All Assets
        </Link>
      </div>
    </section>
  );
};
