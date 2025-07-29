import React from 'react';
import styles from './Hero.module.css';
import imgProfile from '../../../assets/img_profile.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Branding | Image making</div>
          <h1 className={styles.title}>Visual Designer</h1>
          <p className={styles.description}>
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <button className={styles.contactBtn}>Contact</button>
        </div>
        <img className={styles.portraitImage} src={imgProfile}/>
      </div>
    </section>
  );
};

export default Hero; 