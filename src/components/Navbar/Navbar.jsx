import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../contexts/LanguageContext";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Yanis Mediene
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t('nav.about')}</a>
          </li>
          <li>
            <a href="#experience">{t('nav.experience')}</a>
          </li>
          <li>
            <a href="#projects">{t('nav.projects')}</a>
          </li>
          <li>
            <a href="#contact">{t('nav.contact')}</a>
          </li>
        </ul>
        <LanguageToggle />
      </div>
    </nav>
  );
};
