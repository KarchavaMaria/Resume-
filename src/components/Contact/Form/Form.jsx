import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.scss";

const schema = yup.object({
    name: yup.string().required("Введіть імя"),
    email: yup.string().email("Некорректний email").required("Email обовязковий"),
    phone: yup.string(),
    message: yup.string().min(10, "Мінімум 10 символів")
}).required();

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {

        const message =
            `📩 Нова заявка\n` +
            `👤 Імʼя: ${data.name}\n` +
            `📧 Email: ${data.email}\n` +
            `📞 Телефон: ${data.phone}\n` +
            `💬 Повідомлення: ${data.message}`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        chat_id: import.meta.env.VITE_CHAT_ID,
                        text: message,
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("Помилка при відправці повідомлення");
            }

            alert("Повідомлення відправлено!");
            reset();
        } catch (error) {
            console.log(error);
            alert("Сталася помилка, повідомлення не відправлено");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__input}>
                <div className={styles.form__input__block}>
                    <input className={styles.form__input__name} {...register("name")} placeholder="Імя"/>
                    {errors.name && <p style={{ color: "red", padding: "1px 10px"}}>{errors.name.message}</p>}
                </div>
                <div className={styles.form__input__block}>
                    <input className={styles.form__input__email} {...register("email")} type="email" placeholder="Email"/>
                    {errors.email && <p style={{ color: "red", padding: "1px 10px" }}>{errors.email.message}</p>}
                </div>
            </div>
            <div className={styles.form__input}>
                <div className={styles.form__input__block}>
                    <input className={styles.form__input__phone} {...register("phone")} type="tel" placeholder="Телефон"/>
                    {errors.phone && <p style={{ color: "red", padding: "1px 10px" }}>{errors.phone.message}</p>}
                </div>
            </div>
            <div className={styles.form__input}>
                <div className={styles.form__input__block}>
                    <textarea {...register("message")} placeholder="Повідомлення..."/>
                    {errors.message && <p style={{ color: "red", padding: "1px 10px" }}>{errors.message.message}</p>}
                </div>
            </div>
            <div className={styles.form__input}>
                <button className={styles.button__submit} type="submit">Відправити</button>
            </div>
        </form>
    )
}
