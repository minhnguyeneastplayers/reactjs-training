import React from 'react';
import styles from './Portfolio.module.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import LatestWork from './components/LatestWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <LatestWork />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Portfolio; 