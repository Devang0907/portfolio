import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} />
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <h3 className={styles.jobTitle}>Full Stack Engineer</h3>
                <h4 className={styles.companyName}>Sinon Tech Pvt Ltd</h4>
                <p className={styles.location}>Ahmedabad, Gujarat</p>
              </div>
              <span className={styles.duration}>Mar 2026 – Present</span>
            </div>
            <p className={styles.description}>
              Built web applications end-to-end from UI to backend, handling
              deployment pipelines and CI/CD automation to ensure smooth,
              reliable releases in production.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} />
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <h3 className={styles.jobTitle}>Full Stack Engineer</h3>
                <h4 className={styles.companyName}>Technical Core Engineers</h4>
                <p className={styles.location}>Ahmedabad, Gujarat</p>
              </div>
              <span className={styles.duration}>Jan 2025 – Nov 2025</span>
            </div>
            <p className={styles.description}>
              Crafting scalable, high-performance web applications as a Full
              Stack Engineer, collaborating on innovative projects with modern
              frameworks and tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
