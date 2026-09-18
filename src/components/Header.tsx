import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <span className="text-gradient animate-fade-in-up delay-100">PicoBlog</span>
        </div>
        
        <nav className={`${styles.navLinks} animate-fade-in-up delay-200`}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#testimonials" className={styles.navLink}>Testimonials</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#get-started" className={`btn btn-primary ${styles.ctaBtn}`}>Get Started</a>
        </nav>
      </div>
    </header>
  );
}
