import styles from './Skills.module.scss';
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMysql} from "react-icons/si";

const skills = [
    {name: "HTML", level: "эксперт", icon: <SiHtml5/>},
    {name: "CSS / SCSS", level: "эксперт", icon: <SiCss3/>},
    {name: "JavaScript", level: "продвинутый", icon: <SiJavascript/>},
    {name: "React", level: "продвинутый", icon: <SiReact/>},
    {name: "Node.js", level: "базовый", icon: <SiNodedotjs/>},
    {name: "MySQL", level: "базовый", icon: <SiMysql/>},
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>

            <div className={styles.info__title}>
                <h6>Skills</h6>
            </div>
            <div className={styles.skills__block}>
                <div className={styles.skills__list}>
                    {skills.map((skill) => (
                        <div className={styles.skills__card} key={skill.name}>
                            <div className={styles.skills__icon}>{skill.icon}</div>
                            <div className={styles.skills__text}>
                                <p className={styles.skills__name}>{skill.name}</p>
                                <span className={styles.skills__level}>{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;