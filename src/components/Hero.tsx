import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={`${styles.title} animate-fade-in-up delay-100`}>
          Blog at the speed of <span className="text-gradient">thought.</span>
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
          Write in Markdown, deploy in seconds. PicoBlog handles the design, fast load times, and SEO, so you can focus on writing.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in-up delay-300`}>
          <button className="btn btn-primary">Start Blogging Now</button>
          <button className="btn btn-secondary">View Documentation</button>
        </div>

        <div className={`glass-panel animate-float ${styles.heroCode} animate-fade-in-up delay-300`} style={{ animationDelay: '0.4s' }}>
          <span className={styles.typeLine}>$ npm create picoblog@latest my-blog</span>
        </div>
      </div>
    </section>
  );
}
