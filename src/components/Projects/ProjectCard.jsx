import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { t } = useLanguage();

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
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          {t('projects.demo')}
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          {t('projects.source')}
        </a>
      </div>
    </div>
  );
};
