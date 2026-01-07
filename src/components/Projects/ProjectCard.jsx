import styles from "./Projects.module.scss";

const ProjectCard = ({project}) => {
    const {title, description, stack, features, image, github} = project;

    return (
        <article className={styles.card}>
            <div>
                <div className={styles.card__image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={styles.card__title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className={styles.card__content}>

                <ul className={styles.content__stack}>
                    {stack.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <ul className={styles.content__features}>
                    {features.map((item, index) => (
                        <li key={index}>✔ {item}</li>
                    ))}
                </ul>

                <div className={styles.content__links}>
                    <a href={github} target="_blank" rel="noreferrer">
                        GitHub [переглянути]
                    </a>
                </div>
            </div>

        </article>
    );
};

export default ProjectCard;