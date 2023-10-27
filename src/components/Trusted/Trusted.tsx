import React from "react";
import globalStyle from "../../styles/Globals.module.scss";
import avatarImg from "../assets/icon-profile.svg";
import style from "../../styles/Trusted.module.scss";

const Trusted: React.FC = () => {
  return (
    <main className={style.container}>
      <h2 className={globalStyle.sectionTitle}>Zaufali mi</h2>
      <section className={style.logoContainer}>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
        <div className={style.imgBox}>
          <img src={avatarImg} alt="Firma logo" className={style.logo} />
          <p>Firma A</p>
        </div>
      </section>
    </main>
  );
};

export default Trusted;
