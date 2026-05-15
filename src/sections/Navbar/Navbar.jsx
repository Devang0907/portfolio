import { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>Devang</a>
      <ul className={styles.links}>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <img
        src={themeIcon}
        alt="Toggle theme"
        className={styles.themeToggle}
        onClick={toggleTheme}
      />
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </nav>
  );
}

export default Navbar;
