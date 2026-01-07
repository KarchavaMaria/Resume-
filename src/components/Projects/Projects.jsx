import styles from './Projects.module.scss';
import {projectsData} from "./projectsData.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.info__title}>
                <h5>Проекты</h5>
                <p>
                    Практические работы по верстке и frontend-разработке
                </p>
            </div>
            <div className={styles.grid}>
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;