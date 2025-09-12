import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

export const LanguageToggle = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <button 
      className={styles.languageToggle}
      onClick={switchLanguage}
      aria-label="Change language"
    >
      <span className={`${styles.flag} ${language === 'fr' ? styles.active : ''}`}>
        🇫🇷
      </span>
      <span className={`${styles.flag} ${language === 'en' ? styles.active : ''}`}>
        🇬🇧
      </span>
    </button>
  );
};
