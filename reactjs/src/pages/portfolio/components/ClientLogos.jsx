import React from "react";
import styles from "./ClientLogos.module.css";
import imgGoogle from "../../../assets/ic_google_logo.png";
import imgNike from "../../../assets/ic_nike_logo.png";
import imgSamsung from "../../../assets/ic_samsung_logo.png";
import imgApple from "../../../assets/ic_apple_logo.png";
import imgAdidas from "../../../assets/ic_adidas_logo.png";

const ClientLogos = () => {
  const logos = [
    { className: styles.google, img: imgGoogle },
    { className: styles.nike, img: imgNike },
    { className: styles.samsung, img: imgSamsung },
    { className: styles.apple, img: imgApple },
    { className: styles.adidas, img: imgAdidas },
  ];

  return (
    <section className={styles.clientLogos}>
      <div className={styles.logosGrid}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <img src={logo.img} className={logo.className} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
