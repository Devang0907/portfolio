import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/streaming-app-img.png';
import vercel from '../../assets/vercel-app-img.png';
import web from '../../assets/watch-web.png';
import chat from '../../assets/chat.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Devang0907/TubeStreamr-"
          h3="TubeStreamr"
          p="Streaming App"
        />
        <ProjectCard
          src={vercel}
          link="https://github.com/Devang0907/vercel"
          h3="Webnest"
          p="Web-Hosting Plateform"
        />
        <ProjectCard
          src={web}
          link="https://github.com/Devang0907/Watch-Website"
          h3="Quantum"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/Devang0907/chat-app"
          h3="Orbit"
          p="Websocket Chat Website"
        />
        
      </div>
    </section>
  );
}

export default Projects;
