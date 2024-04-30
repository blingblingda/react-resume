import React from "react";
import "./portfolio.css";
import Application from "./Application";
import AdoptMe from "../../assets/app-adoptMe.png";
import FoodOrder from "../../assets/app-foodOrder.png";
import SpendingTracker from "../../assets/app-monthlySpendingTracker.png";
import Shell from "../../assets/app-simpleShell.png";
import Tulip from "../../assets/app-tullip.png";
import KFCK from "../../assets/app-kfck.png";

const apps = [
  {
    id: 1,
    image: KFCK,
    title: "KFCK",
    tech: "React, TypeScript, Bootstrap",
    github: "https://kfck.onrender.com/",
  },
  {
    id: 2,
    image: Tulip,
    title: "Tulip",
    tech: "HTML JavaScript Tailwind",
    github: "https://tulip-fe.onrender.com/",
  },
  {
    id: 3,
    image: AdoptMe,
    title: "Hi Cuties",
    tech: "HTML5 CSS3 JAVASCRIPT REACT",
    github: "https://github.com/blingblingda/hi-cuties",
    demo: "https://blingblingda.github.io/hi-cuties",
  },
  {
    id: 4,
    image: FoodOrder,
    title: "A Food Order App",
    tech: "HTML5 CSS3 REACT",
    github: "https://github.com/blingblingda/food-order",
    demo: "https://blingblingda.github.io/food-order",
  },
  {
    id: 5,
    image: SpendingTracker,
    title: "Monthly Spending Tracker",
    tech: "HTML5 CSS3 REACT",
    github: "https://github.com/blingblingda/monthly-spending-tracker",
    demo: "https://blingblingda.github.io/monthly-spending-tracker/",
  },
  {
    id: 6,
    image: Shell,
    title: "Simple Shell",
    tech: "C",
    github: "https://github.com/belindaHBTN/holbertonschool-simple_shell",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Projects I'm proud of</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {apps.map((app) => (
          <Application
            key={app.id}
            image={app.image}
            title={app.title}
            tech={app.tech}
            githubLink={app.github}
            demoLink={app.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
