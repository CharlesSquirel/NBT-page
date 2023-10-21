import React from "react";
import styles from "../../styles/ContactHeader.module.scss";
import envelopeImg from "../assets/envelope.svg";
import phoneImg from "../assets/phone.svg";

const ContactHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.contactBox}>
        <img src={envelopeImg} alt="Phone icon" className={styles.icons} />
        <p className={styles.text}>516 169 233</p>
      </div>
      <div className={styles.contactBox}>
        <img src={phoneImg} alt="Envelope icon" className={styles.icons} />
        <p className={styles.text}>nbt.lublin@gmail.com</p>
      </div>
    </header>
  );
};

export default ContactHeader;
