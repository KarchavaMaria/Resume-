import styles from "./Header.module.scss";
import {Link} from "react-scroll";
import menu from "../../assets/icons/icon_menu.png"
import {useState} from "react";

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <button className={styles.menu__mobile} onClick={() => {
                setIsMobileOpen(true)
            }}
            ><img src={menu} alt="menu"/>
            </button>
            <div className={styles.logo}>
                <h1 className={styles.logo__text}>Карчава Марія</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link to="about" offset={-200} smooth={true} duration={500} className={styles.nav__link}>ПРО
                            МЕНЕ</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="education" offset={-200} smooth={true} duration={500}
                              className={styles.nav__link}>ОСВІТА</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="skills" offset={-200} smooth={true} duration={500}
                              className={styles.nav__link}>SKILLS</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="projects" offset={-200} smooth={true} duration={500}
                              className={styles.nav__link}>ПРОЄКТИ</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="contacts" offset={-200} smooth={true} duration={500}
                              className={styles.nav__link}>КОНТАКТИ</Link>
                    </li>
                </ul>
            </nav>

            {isMobileOpen && (
                <div className={styles.mobile__menu__open}>
                    <button className={styles.mobile__btn__close} onClick={() => {
                        setIsMobileOpen(false)
                    }}>
                        x
                    </button>
                    <ul className={styles.mobile__nav__list}>
                        <li className={styles.mobile__nav__item}>
                            <Link to="about" offset={-200} smooth={true} duration={500} onClick={() => {
                                setIsMobileOpen(false)
                            }}>ПРО МЕНЕ</Link>
                        </li>
                        <li className={styles.mobile__nav__item}>
                            <Link to="education" offset={-200} smooth={true} duration={500}
                                  onClick={() => setIsMobileOpen(false)}>ОСВІТА</Link>
                        </li>
                        <li className={styles.mobile__nav__item}>
                            <Link to="skills" offset={-200} smooth={true} duration={500}
                                  onClick={() => setIsMobileOpen(false)}>SKILLS</Link>
                        </li>
                        <li className={styles.mobile__nav__item}>
                            <Link to="projects" offset={-200} smooth={true} duration={500}
                                  onClick={() => setIsMobileOpen(false)}>ПРОЄКТИ</Link>
                        </li>
                        <li className={styles.mobile__nav__item}>
                            <Link to="contacts" offset={-200} smooth={true} duration={500}
                                  onClick={() => setIsMobileOpen(false)}>КОНТАКТИ</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;