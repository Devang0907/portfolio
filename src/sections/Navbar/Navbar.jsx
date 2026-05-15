import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

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
    </nav>
  );
}

export default Navbar;
