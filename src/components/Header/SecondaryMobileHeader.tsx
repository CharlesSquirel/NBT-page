import React from "react";
import style from "../../styles/Header.module.scss";

const SecondaryMobileHeader: React.FC = () => {
  return (
    <div className={style.secondaryMobileContainer}>
      <h2 className={style.secondarySubtitle}>
        <span className={style.capitalizeBold}>N</span>ietuzinkowe <span className={style.capitalizeBold}>B</span>iuro <span className={style.capitalizeBold}>T</span>łumaczeń Języka Angielskiego
      </h2>
      <p>Daj sobie przetłumaczyć!</p>
    </div>
  );
};

export default SecondaryMobileHeader;
