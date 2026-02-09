import styles from './ExperienceStyles.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      
      <div className={styles.experienceCard}>
        <div className={styles.companyInfo}>
          <h3 className={styles.jobTitle}>Full Stack Engineer</h3>
          <h4 className={styles.companyName}>Technical Core Engineers</h4>
          <p className={styles.location}>Ahmedabad, Gujarat</p>
          <p className={styles.duration}>Jan 2025 - Nov 2025</p>
        </div>
        
        <div className={styles.jobDescription}>
          <p>Crafting scalable, high-performance web applications as a Full Stack Engineer, collaborating on innovative projects with modern frameworks and tools.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
