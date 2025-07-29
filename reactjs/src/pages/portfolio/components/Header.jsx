import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navLinks = useMemo(() => [
    { to: "/weather", text: "About" },
    { to: "/weather", text: "Work" },
    { to: "/weather", text: "Contact" }
  ], []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Logo
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className={styles.navLink}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 