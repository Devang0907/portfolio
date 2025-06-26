import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      {/* Contact Links */}
      <div className={styles.contactLinks}>
        <a 
          href="mailto:rakholiyadevang@gmail.com" 
          className={styles.contactLink}
        >
          <span>Email Me</span>
        </a>
        
        <a 
          href="https://x.com/Devang0907" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <span>DM me on Twitter</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;