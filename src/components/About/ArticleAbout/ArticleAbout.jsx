import styles from './ArticleAbout.module.scss';

const ArticleAbout = () => {
    return (
        <div className={styles.article__about}>
            <article className={styles.article__about__content}>
                <h5>Про мене</h5>
                <p className={styles.article__about__text}>Я з великим інтересом вивчаю сферу IT та розвиваюся у
                    напрямку frontend-розробки. Мені подобається
                    вчитися новому, розбиратися в технологіях та бачити результат своєї роботи у браузері.
                    Проходила онлайн-курси FullStack Node.js Developer Cyberbionic Systematics.
                    Активно розвиваю практичні навички, працюю над навчальними та пет-проектами, верстаю за макетами.
                    Прагну здобути комерційний досвід, брати участь у реальних проектах та розвиватися в команді,
                    переймаючи досвід більш досвідчених фахівців.
                </p>
            </article>
        </div>
    )
}

export default ArticleAbout;