import { useState } from "react";
import "./Main.css";
import { motion, AnimatePresence } from "framer-motion";
import Show2 from "../../components/Show-2/Show2";
import img1 from "./../../assets/img-1.png";
import img2 from "./../../assets/img-2.png";
import img3 from "./../../assets/img-3.png";
import img4 from "./../../assets/img-4.png";
import img5 from "./../../assets/img-5.png";
import img6 from "./../../assets/img-6.png";
import img7 from "./../../assets/img-7.png";
import img8 from "./../../assets/img-8.png";
import img9 from "./../../assets/img-9.png";
import img10 from "./../../assets/img-10.png";
import img11 from "./../../assets/ecommerce.png";
import img12 from "./../../assets/movies.png";
import img13 from "./../../assets/img-13.png";
import img14 from "./../../assets/img-14.png";
import img15 from "./../../assets/img-15.png";

const myProjects = [
  {
    title: "Template1",
    category: "html&css",
    img: img1,
    subtitle:
      "This Project Is Built With Html and Css. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/HTML-CSS-Template-One/",
    github: "https://github.com/Jo-Plus/HTML-CSS-Template-One",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Template2",
    category: "html&css",
    img: img2,
    subtitle:
      "This Project Is Built With Html and Css. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/HTML-CSS-Template-Two/",
    github: "https://github.com/Jo-Plus/HTML-CSS-Template-Two",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Template3",
    category: "html&css",
    img: img3,
    subtitle:
      "This Project Is Built With Html and Css. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/HTML-CSS-Template-Three/",
    github: "https://github.com/Jo-Plus/HTML-CSS-Template-Three",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Template4",
    category: "html&css",
    img: img4,
    subtitle:
      "This Project Is Built With Html and Css. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/HTML-CSS-Template-Four/",
    github: "https://github.com/Jo-Plus/HTML-CSS-Template-Four",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Bondi",
    category: "bootstrap",
    img: img5,
    subtitle:
      "This Project Is Built With Html&Css and Bootstrap. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/Bondi-Template/",
    github: "https://github.com/Jo-Plus/Bondi-Template",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Codelander",
    category: "tailwind",
    img: img6,
    subtitle:
      "This Project Is Built With Html and Tailwind. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/Codelander/",
    github: "https://github.com/Jo-Plus/Codelander",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Appexy-Page",
    category: "tailwind",
    img: img7,
    subtitle:
      "This Project Is Built With Html and Tailwind. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/Appexy-Page/",
    github: "https://github.com/Jo-Plus/Appexy-Page",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "CRUD",
    category: "js",
    img: img10,
    subtitle:
      "This Project Is Built With Html&Css and JavaScript. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/CRUD/",
    github: "https://github.com/Jo-Plus/CRUD",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Simple-Game",
    category: "js",
    img: img8,
    subtitle:
      "This Project Is Built With Html&Css and JavaScript. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/Simple-Game/",
    github: "https://github.com/Jo-Plus/Simple-Game",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Maximum",
    category: "js",
    img: img9,
    subtitle:
      "This Project Is Built With Html&Css and JavaScript. Features a Highly Responsive Design",
    link: "https://jo-plus.github.io/Maximum-Project/",
    github: "https://github.com/Jo-Plus/Maximum-Project",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "ecommerce-App",
    category: "react",
    img: img11,
    subtitle:
      "This Project Is Built With Html&Css and React. Features a Highly Responsive Design",
    link: "https://ecommerce-app-1e793.web.app/",
    github: "https://github.com/Jo-Plus/Ecommerce-App",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "movies-App",
    category: "react",
    img: img12,
    subtitle:
      "This Project Is Built With Html&Css and React. Features a Highly Responsive Design",
    link: "https://movies-app-528a2.web.app/",
    github: "https://github.com/Jo-Plus/Movies-app",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Portfolio",
    category: "react",
    img: img15,
    subtitle:
      "This Project Is Built With Html&Css and React. Features a Highly Responsive Design",
    link: "https://portfolio-hazel-three-23.vercel.app/",
    github: "https://github.com/Jo-Plus/Portfolio",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "MusicVibe",
    category: "nextjs",
    img: img13,
    subtitle:
      "This Project Is Built With Html&Css and Next.js. Features a Highly Responsive Design",
    link: "https://musicvibe-flax.vercel.app/",
    github: "https://github.com/Jo-Plus/MusicVibe",
    more: "https://github.com/Jo-Plus",
  },
  {
    title: "Saasify",
    category: "nextjs",
    img: img14,
    subtitle:
      "This Project Is Built With Html&Css and Next.js. Features a Highly Responsive Design",
    link: "https://saasify-puce.vercel.app/",
    github: "https://github.com/Jo-Plus/Saasify",
    more: "https://github.com/Jo-Plus",
  },
];

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr =
      buttonCategory === "all"
        ? myProjects
        : myProjects.filter((item) => item.category === buttonCategory);
    setArr(newArr);
  };

  return (
    <>
      <p className="headSection skils hidden" id="projects">
        My <span>Projects</span>
      </p>
      <Show2 />
      <main className="flex">
        <section className="flex left-section hidden">
          <button
            onClick={() => handleClick("all")}
            className={currentActive === "all" ? "active" : null}
          >
            All Projects
          </button>
          {["html&css", "bootstrap", "tailwind", "js", "react", "nextjs"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleClick(category)}
                className={currentActive === category ? "active" : null}
              >
                {category === "html&css"
                  ? "HTML & CSS"
                  : category === "js"
                  ? "JavaScript"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </section>

        <section className="right-section flex">
          <AnimatePresence>
            {arr.map((item) => (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8 }}
                key={`${item.title}-${item.category}`}
                className="card"
              >
                <img width={266} src={item.img} alt={item.title} />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">{item.subtitle}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.link}
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                      <a
                        href={item.github}
                        className="icon-github"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>
                    <a
                      className="link flex"
                      href={item.more}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      more{" "}
                      <span
                        style={{ alignSelf: "center" }}
                        className="icon-arrow-circle-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}
