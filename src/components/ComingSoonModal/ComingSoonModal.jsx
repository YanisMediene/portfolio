import React, { useEffect } from "react";
import styles from "./ComingSoonModal.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

export const ComingSoonModal = ({ isOpen, onClose, title }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>🚀</div>
          </div>
          <h4 className={styles.messageTitle}>{t('demo.comingSoon.title')}</h4>
          <p className={styles.messageText}>
            {t('demo.comingSoon.message')}
          </p>
          <p className={styles.subText}>
            {t('demo.comingSoon.subMessage')}
          </p>
          <button className={styles.okButton} onClick={onClose}>
            {t('demo.comingSoon.okButton')}
          </button>
        </div>
      </div>
    </div>
  );
};