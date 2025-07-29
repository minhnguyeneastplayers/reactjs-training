import React from 'react';
import styles from './Contact.module.css';
import imgBehance from '../../../assets/ic_behance.png';
import imgFacebook from '../../../assets/ic_facebook.png';
import imgInstagram from '../../../assets/ic_instagram.png';
import imgDribbble from '../../../assets/ic_dribbble.png';
import imgDiscord from '../../../assets/ic_discord.png';

const Contact = () => {
  const socialIcons = [
    { name: 'Discord', icon: imgDiscord },
    { name: 'Facebook', icon: imgFacebook },
    { name: 'Dribbble', icon: imgDribbble },
    { name: 'Instagram', icon: imgInstagram },
    { name: 'Behance', icon: imgBehance },
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Lets work together</h2>
          <p className={styles.description}>
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className={styles.socialIcons}>
            {socialIcons.map((social, index) => (
              <img className={styles.socialIcon} key={index} src={social.icon} />
            ))}
          </div>
        </div>
        <div className={styles.rightContent}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Your name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Your email"
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 