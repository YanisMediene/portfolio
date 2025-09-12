import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about.title')}</h2>
      <div className={styles.bioSection}>
        <p className={styles.bio}>
          {t('about.bio')}
        </p>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImagePlaceholder.png")}
          alt="Yanis working on AI projects"
          className={styles.aboutImage}
        />
        <div className={styles.skillsContent}>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="AI icon" />
              <div className={styles.aboutItemText}>
                <h3>{t('about.skills.ai.title')}</h3>
                <p>
                  {t('about.skills.ai.description')}
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Data Science icon" />
              <div className={styles.aboutItemText}>
                <h3>{t('about.skills.data.title')}</h3>
                <p>
                  {t('about.skills.data.description')}
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="Full-Stack icon" />
              <div className={styles.aboutItemText}>
                <h3>{t('about.skills.fullstack.title')}</h3>
                <p>
                  {t('about.skills.fullstack.description')}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
