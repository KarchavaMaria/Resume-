import styles from "./About.module.scss";
import foto from "../../assets/img/img_my_foto.jpg"
import Socials from "../Socials/Socials.jsx";
import {socialsData} from "../Socials/socialsData.js";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.overlay}></div>
            <div className={styles.about_info}>
                <div className={styles.card}>
                    <div className={styles.card__image}>
                        <img className={styles.image__foto} src={foto} alt="Моє фото"/>
                    </div>
                    <div className={styles.card__info}>
                        <article className={styles.article__info}>
                            <div className={styles.article__info__text}>
                                <h2>Карчава Марія</h2>
                                <h3>Junior Frontend Developer / <br/>
                                    HTML-верстальщик</h3>
                            </div>
                            <div className={styles.article__info__text}>
                                <h4>Телефон:</h4>
                                <p>+38(093)418 - 27 - 65</p>
                            </div>
                            <div className={styles.article__info__text}>
                                <h4>Email:</h4>
                                <p>idkovalyova@gmail.com</p>
                            </div>
                            <div className={styles.article__info__text}>
                                <h4>Портфолио:</h4>
                                <a href="https://github.com/KarchavaMaria"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    /github.com/KarchavaMaria
                                </a>

                            </div>
                            <div className={styles.article__info__text}>
                                <h4>Дата рождения:</h4>
                                <p>26 лютого 1998</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={styles.socials}>
                    <Socials
                        className={styles.nav__socials}
                        listClassName={styles.socials__list}
                        itemClassName={styles.socials__item}
                        iconSize={25}
                        socials={socialsData}
                    />
                </div>
            </div>
        </section>
    )
}

export default About;