import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import historyTranslations from "../../data/historyTranslations.json";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const Experience = () => {
  const { t, language } = useLanguage();
  const history = historyTranslations[language];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience.title')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <a 
                  href={historyItem.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.logoLink}
                >
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </a>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
