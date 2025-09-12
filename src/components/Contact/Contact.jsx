import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yanis.mediene@gmail.com">yanis.mediene@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/yanis-mediene-22935a261">linkedin.com/in/yanis-mediene-22935a261</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/YanisMediene">github.com/YanisMediene</a>
        </li>
      </ul>
    </footer>
  );
};
