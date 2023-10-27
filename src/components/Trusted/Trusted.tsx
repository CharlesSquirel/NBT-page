import React from "react";
import globalStyle from "../../styles/Globals.module.scss";
import avatarImg from "../assets/icon-profile.svg";
import style from "../../styles/Trusted.module.scss";

const Trusted: React.FC = () => {
  return (
    <main>
      <h2 className={globalStyle.sectionTitle}>Zaufali mi</h2>
      <section className={style.logoContainer}>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
        <div>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
        </div>
      </section>
    </main>
  );
};

export default Trusted;
