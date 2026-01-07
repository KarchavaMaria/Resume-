import styles from "./Contact.module.scss";
import Socials from "../Socials/Socials.jsx";
import {socialsData} from "../Socials/socialsData.js";
import Form from "./Form/Form.jsx";

const Contact = () => {
    return (
        <section id="contacts" className={styles.contact}>
            <div className={styles.info__title}>
                <h5>Звяжіться зі мною</h5>
                <p>Відкрита до пропозицій та співробітництва</p>
            </div>
            <div className={styles.contact__content}>
                <div className={styles.form}>
                    <Form/>
                </div>
                <div className={styles.contact__info}>
                    <div className={styles.contact__info__block}>
                        <div className={styles.contact__info__text}>
                            <p className={styles.info__text}>Карчава Марія</p>
                            <p className={styles.info__text}>Junior Frontend Developer / <br/>
                                HTML-верстальщик</p>
                        </div>
                        <div className={styles.contact__info__text}>
                            <h4>Телефон:</h4>
                            <p>+38(093)418 - 27 - 65</p>
                        </div>
                        <div className={styles.contact__info__text}>
                            <h4>Email:</h4>
                            <p>idkovalyova@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <Socials
                            className={styles.nav_socials}
                            listClassName={styles.socials__list}
                            itemClassName={styles.socials__item}
                            iconSize={20}
                            socials={socialsData}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;