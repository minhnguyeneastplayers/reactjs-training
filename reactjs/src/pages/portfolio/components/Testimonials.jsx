import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gemma Nolen',
      company: 'Google',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Nike',
      rating: 5,
      avatar: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Michael Chen',
      company: 'Samsung',
      rating: 5,
      avatar: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Emma Davis',
      company: 'Apple',
      rating: 5,
      avatar: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Alex Thompson',
      company: 'Adidas',
      rating: 5,
      avatar: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Lisa Wang',
      company: 'Microsoft',
      rating: 5,
      avatar: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>Testimonial</h2>
      <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
              <div className={styles.author}>
                <img className={styles.avatar} src={testimonial.avatar} />
                <div>
                  <div className={styles.rating}>{renderStars(testimonial.rating)}</div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials; 