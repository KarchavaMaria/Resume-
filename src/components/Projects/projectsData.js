import dental from "../../assets/img/img_dental-club.png";
import moon from "../../assets/img/img_moon-river.png";
import toDo from "../../assets/img/img_to-do-list.png";
import laFlora from "../../assets/img/img_la-flora-boutique.png";

export const projectsData = [
    {
        id: 1,
        title: "Dental Club",
        description: "Cтильний односторінковий веб-сайт для стоматологічної клініки. Розроблений з використанням чистого REACT, HTML та SCSS, він має адаптивний дизайн",
        type: "React",
        stack: ["React", "HTML", "SCSS", "JavaScript"],
        features: ["Адаптив", "Компонентний підхід"],
        image: dental,
        github: "https://github.com/KarchavaMaria/Dental_Club_",
    },
    {
        id: 2,
        title: "Moon River",
        description: "Стильний односторінковий веб-сайт, присвячений колекціям ювелірних виробів. Розроблений за допомогою звичайного JavaScript, HTML, CSS. Має адаптивний дизайн, інтерактивну галерею та плавну анімацію.",
        type: "JavaScript",
        stack: ["HTML", "CSS", "JavaScript"],
        features: ["Pixel Perfect", "Галерея", "Адаптив", "EN/UA/RU"],
        image: moon,
        github: "https://github.com/KarchavaMaria/Moon_River_",
    },
    {
        id: 3,
        title: "To Do List",
        description: "Односторінковий веб-сайт, створений на чистому JavaScript, HTML та CSS. Додаток для управління задачами. З вибором тем: біла, темна та кольорова.",
        type: "JavaScript",
        stack: ["HTML", "SCSS", "JavaScript"],
        features: ["CRUD", "LocalStorage", "Theme"],
        image: toDo,
        github: "https://github.com/KarchavaMaria/To_Do_List",
    },
    {
        id: 4,
        title: "La Flora Boutique",
        description: "Сучасний бутік-сайт електронної комерції з елегантними картками товарів, зручною навігацією та чистим інтерфейсом. Розроблено на React на фронтенді та Node.js/Express на сервері. Повністю адаптивний та простий у розгортанні.",
        type: "Fullstack",
        stack: ["HTML", "SCSS", "React", "Node.js", "Express", "MySQL"],
        features: ["API", "Каталог", "Корзина", "User-карта", "Вподобання"],
        image: laFlora,
        github: "https://github.com/KarchavaMaria/La_Flora_Boutique",
    },
];
