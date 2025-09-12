import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.greeting')}</h1>
        <p className={styles.description}>
          {t('hero.description')}
        </p>
        <a href="mailto:yanis.mediene@gmail.com" className={styles.contactBtn}>
          {t('hero.contactBtn')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImagePlaceholder.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
