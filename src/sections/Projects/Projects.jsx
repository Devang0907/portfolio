import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/streaming-app-img.png';
import vercel from '../../assets/vercel-app-img.png';
import web from '../../assets/watch-web.png';
import chat from '../../assets/chat.png';
import ProjectCard from '../../common/ProjectCard';
import mcp from "../../assets/solana-mcp.png"
import solback from "../../assets/solback.png"
import swap from "../../assets/swap.png"
import eternal from "../../assets/eternal.png"

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
        {/* <ProjectCard
          src={web}
          link="https://github.com/Devang0907/Watch-Website"
          h3="Quantum"
          p="Ecommerce Website"
        /> */}
        <ProjectCard
          src={chat}
          link="https://github.com/Devang0907/chat-app"
          h3="Orbit"
          p="Websocket Chat Website"
        />
        <ProjectCard
          src={mcp}
          link="https://github.com/Devang0907/Solana-MCP"
          h3="Solona Bot"
          p="MCP server for solana"
        />
        <ProjectCard
          src={solback}
          link="https://github.com/Devang0907/Solback"
          h3="SolBack"
          p="SOL Recovery Web App"
        />
        <ProjectCard
          src={eternal}
          link="https://github.com/Devang0907/Eternal"
          h3="Eternal"
          p="Crypto Inheritance Tool"
        />
        <ProjectCard
          src={swap}
          link="https://github.com/Devang0907/Token-Flow"
          h3="Token Flow"
          p="Crypto swap visualizer"
        />

      </div>
    </section>
  );
}

export default Projects;
