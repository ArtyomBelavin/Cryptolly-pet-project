import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useCryptoStore } from "../../../../Store/useCryptoStore";
import bgCard from "../../../../Assets/image/bgCard.png";
import Mastercard from "../../../../Assets/vectors/mastercard.svg";
import Visa from "../../../../Assets/vectors/visa.svg";
import Apple from "../../../../Assets/vectors/apple.svg";
import Google from "../../../../Assets/vectors/google.svg";
import Paypal from "../../../../Assets/vectors/paypal.svg";

type ImagePayment = {
  id: number;
  img: string;
  name: string;
};

export const ConverterSection: React.FC = () => {
  const { cryptos, fetchCryptos } = useCryptoStore();
  const [activeTab, setActiveTab] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  useEffect(() => {
    calculateConversion();
  }, [amount, fromCurrency, toCurrency, cryptos]);

  const calculateConversion = () => {
    if (!cryptos.length) return;

    const fromRate =
      fromCurrency === "USD"
        ? 1
        : cryptos.find((c) => c.symbol === fromCurrency)?.price || 0;
    const toRate =
      toCurrency === "USD"
        ? 1
        : cryptos.find((c) => c.symbol === toCurrency)?.price || 1;

    if (fromRate && toRate) {
      setConvertedAmount((amount * fromRate) / toRate);
    }
  };

  const fromCrypto = cryptos.find((c) => c.symbol === fromCurrency);
  const fromCryptoImage = fromCrypto ? fromCrypto.image : "";
  const fromCryptoName = fromCrypto ? fromCrypto.name : "Unknown";

  const toCrypto = cryptos.find((c) => c.symbol === toCurrency);
  const toCryptoImage = toCrypto ? toCrypto.image : "";
  const toCryptoName = toCrypto ? toCrypto.name : "Unknown";
  const toCryptoPrice = toCrypto ? toCrypto.price.toFixed(2) : "0.00";

  const ImagePayment: ImagePayment[] = [
    {
      id: 0,
      img: Mastercard,
      name: "Mastercard",
    },
    {
      id: 1,
      img: Visa,
      name: "Visa",
    },
    {
      id: 2,
      img: Apple,
      name: "Apple",
    },
    {
      id: 3,
      img: Google,
      name: "Google",
    },
    {
      id: 4,
      img: Paypal,
      name: "Paypal",
    },
  ];

  return (
    <section className={styles.converterSection}>
      <h2 className={styles.title}>
        One click, instant payout with credit or debit card.
      </h2>
      <p className={styles.descr}>
        Become a crypto owner in minutes using your debit or credit card and
        quickly purchase top cryptocurrencies.
      </p>

      <div className={styles.bgCard}>
        <img src={bgCard} alt="bgCard" />
      </div>
      <div className={styles.converterContainer}>
        <div className={styles.containerHeader}>
          {["Buy", "Sell"].map((text, index) => (
            <button
              onClick={() => setActiveTab(index)}
              className={activeTab === index ? styles.activeBtn : styles.Btn}
              key={index}
            >
              {text}
            </button>
          ))}
        </div>
        <div>
          <h3 className={styles.converterTitle}>1 {toCryptoName} is roughly</h3>
          <p className={styles.converterDescr}>
            {toCryptoPrice} <span>USD</span>
          </p>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          {fromCryptoImage && (
            <img
              className={styles.cryptoImg}
              src={fromCryptoImage}
              alt={fromCryptoName}
            />
          )}
          <select
            className={styles.select}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.symbol}>
                {crypto.symbol}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="number"
            value={convertedAmount.toFixed(4)}
            disabled
          />
          {toCryptoImage && (
            <img
              className={styles.cryptoImg}
              width={24}
              src={toCryptoImage}
              alt={toCryptoName}
            />
          )}
          <select
            className={styles.select}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.symbol}>
                {crypto.symbol}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.buyNowBtn}>
          {activeTab === 0 ? "Buy now" : "Sell now"}
        </button>
      </div>

      <div className={styles.payment}>
        <p>We accept payment with many methods:</p>
        <div className={styles.imgContainer}>
          {ImagePayment.map((img) => (
            <img key={img.id} src={img.img} alt={img.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
