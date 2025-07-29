import React, { useMemo } from 'react';
import styles from './Services.module.css';
import imgProduct from '../../../assets/img_product.png';
import imgVisual from '../../../assets/img_visual.png';
import imgArt from '../../../assets/img_art.png';

const Services = () => {
  const services = useMemo(() => [
    {
      title: 'Product Design',
      description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      icon: styles.productIcon,
      img: imgProduct
    },
    {
      title: 'Visual Design',
      description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      icon: styles.visualIcon,
      img: imgVisual
    },
    {
      title: 'Art Direction',
      description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      icon: styles.artIcon,
      img: imgArt
    }
  ], []);

  return (
    <section>
      <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>
                <img src={service.img} className={service.icon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services; 