import styles from "./DiplomaModal.module.scss";

const DiplomaModal = ({open, file, onClose}) => {
    if (!open) return null;

    return (
        <div className={styles.diplomaModal} onClick={onClose}>
            <div className={styles.diplomaModal__content}
                 onClick={(e) => e.stopPropagation()}>
                <button className={styles.diplomaModal__close} onClick={onClose}>
                    X
                </button>
                <iframe
                    src={file}
                    title="document"
                    className={styles.diplomaModal__iframe}
                >
                </iframe>
            </div>
        </div>
    )
}

export default DiplomaModal;