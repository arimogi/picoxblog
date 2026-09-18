import React from 'react';
import styles from './Features.module.css';

const featuresData = [
  {
    title: 'Markdown Native',
    description: 'Write your posts in pure Markdown. We parse it at build time for maximum performance, with support for frontmatter, code blocks, and math.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    )
  },
  {
    title: 'Blazing Fast',
    description: 'Next.js App Router and static generation means your blog loads instantly. Score 100 on Lighthouse out of the box.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    title: 'Premium Design',
    description: 'Stop tweaking CSS. PicoBlog comes with beautifully crafted components, dark mode, and smooth micro-animations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={`${styles.sectionHeader} animate-fade-in-up delay-100`}>
          <h2 className={styles.sectionTitle}>Everything you need.</h2>
          <p className={styles.sectionSubtitle}>
            PicoBlog is built on modern web standards to give you the best blogging experience possible without the bloat.
          </p>
        </div>
        
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-panel ${styles.card} animate-fade-in-up`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
