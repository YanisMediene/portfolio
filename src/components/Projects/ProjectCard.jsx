import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, videoId, source },
  onDemoClick
}) => {
  const { t } = useLanguage();

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (videoId && onDemoClick) {
      onDemoClick(videoId, title);
    } else if (demo) {
      window.open(demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <button 
          onClick={handleDemoClick} 
          className={`${styles.link} ${styles.demoButton}`}
          type="button"
        >
          {videoId && <span className={styles.playIcon}>▶</span>}
          <span>{t('projects.demo')}</span>
        </button>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          {t('projects.source')}
        </a>
      </div>
    </div>
  );
};
