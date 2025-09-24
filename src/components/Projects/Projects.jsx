import React, { useState } from "react";

import styles from "./Projects.module.css";

import projectsTranslations from "../../data/projectsTranslations.json";
import { ProjectCard } from "./ProjectCard";
import { VideoModal } from "../VideoModal/VideoModal";
import { ComingSoonModal } from "../ComingSoonModal/ComingSoonModal";
import { useLanguage } from "../../contexts/LanguageContext";

export const Projects = () => {
  const { t, language } = useLanguage();
  const projects = projectsTranslations[language];
  const [videoModalState, setVideoModalState] = useState({
    isOpen: false,
    videoId: null,
    title: ""
  });
  const [comingSoonModalState, setComingSoonModalState] = useState({
    isOpen: false,
    title: ""
  });

  const openVideoModal = (videoId, title) => {
    if (videoId === "coming-soon") {
      setComingSoonModalState({
        isOpen: true,
        title
      });
    } else {
      setVideoModalState({
        isOpen: true,
        videoId,
        title
      });
    }
  };

  const closeVideoModal = () => {
    setVideoModalState({
      isOpen: false,
      videoId: null,
      title: ""
    });
  };

  const closeComingSoonModal = () => {
    setComingSoonModalState({
      isOpen: false,
      title: ""
    });
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t('projects.title')}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard 
              key={id} 
              project={project} 
              onDemoClick={openVideoModal}
            />
          );
        })}
      </div>
      <VideoModal
        isOpen={videoModalState.isOpen}
        onClose={closeVideoModal}
        videoId={videoModalState.videoId}
        title={videoModalState.title}
      />
      <ComingSoonModal
        isOpen={comingSoonModalState.isOpen}
        onClose={closeComingSoonModal}
        title={comingSoonModalState.title}
      />
    </section>
  );
};
