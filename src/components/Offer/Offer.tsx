import React from "react";
import bgOfferImg from "../assets/bg-person.jpg";
import style from "../../styles/Offer.module.scss";
import globalStyle from "../../styles/Globals.module.scss";

const Offer: React.FC = () => {
  return (
    <main className={style.container}>
      <div className={style.textContainer}>
        <h2 className={globalStyle.sectionTitle}>Oferta</h2>
        <ul className={style.description}>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et</li>
          <li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
          <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo </li>
          <li>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          <li>qui officia deserunt mollit anim id est laborum</li>
        </ul>
      </div>
      <div className={style.backgroundImg}>
        <img src={bgOfferImg} alt="Person at office desk" />
      </div>
    </main>
  );
};

export default Offer;
