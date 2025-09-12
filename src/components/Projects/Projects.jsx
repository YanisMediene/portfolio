import React from "react";

import styles from "./Projects.module.css";

import projectsTranslations from "../../data/projectsTranslations.json";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../contexts/LanguageContext";

export const Projects = () => {
  const { t, language } = useLanguage();
  const projects = projectsTranslations[language];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t('projects.title')}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
