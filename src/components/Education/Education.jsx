import styles from "./Education.module.scss";
import {useState} from "react";
import DiplomaModal from "./DiplomaModal/DiplomaModal.jsx";
import diplomaJournalism from "../../assets/img/diploma_journalism.pdf";
import diplomaFullstack from "../../assets/img/diploma_fullstack.pdf";

const Education = () => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);

    return (
        <section id="education" className={styles.education}>
            <div className={styles.education__info}>

                <div className={styles.info__title}>
                    <h5>Освіта</h5>
                </div>

                <div className={styles.info__blocks}>
                    <div className={styles.info__block}>
                        <div className={styles.info__year}>
                            <h6>2016-2021</h6>
                            <p>МАУП (Журналістика)</p>
                            <button className={styles.achievement} onClick={() => {
                                setFile(diplomaJournalism)
                                setOpen(true)
                            }}>
                                [ Переглянути диплом 🎓 ]
                            </button>
                        </div>

                        <div className={styles.info__description}>
                            МАУП — Журналістика. Бакалавр.
                            Розвинуті навички роботи з контентом, структуризації
                            інформації.
                        </div>
                    </div>

                    <div className={styles.info__block}>

                        <div className={styles.info__year}>
                            <h6>2023-2026</h6>
                            <p>CyberBionic(FullStack Node.js)</p>
                            <button className={styles.achievement} onClick={() => {
                                setFile(diplomaFullstack)
                                setOpen(true)
                            }}>[ Переглянути сертифікат 📄 ]
                            </button>
                        </div>

                        <div className={styles.info__description}>
                            CyberBionic Systematics — FullStack Node.js
                            Developer.
                            Практичне навчання:
                            HTML, CSS, JavaScript, React, Node.js, Express, MySql, Git.
                        </div>
                    </div>

                    <div className={styles.info__block}>

                        <div className={styles.info__year}>
                            <h6>2025-2026</h6>
                            <p>Self-Education (Frontend)</p>
                            <a className={styles.achievement} href="https://github.com/KarchavaMaria?tab=repositories"
                               target="_blank">[ Переглянути портфоліо 📂 ]
                            </a>
                        </div>

                        <div className={styles.info__description}>
                            Саморозвиток у frontend - та backend - розробці:
                            поглиблення знань React, JavaScript.
                        </div>
                    </div>

                    <DiplomaModal open={open} file={file} onClose={() => setOpen(false)}/>

                </div>
            </div>
        </section>
    )
}

export default Education;