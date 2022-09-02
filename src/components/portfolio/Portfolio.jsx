import React from "react";
import "./portfolio.css";
import Application from "./Application";
import AdoptMe from "../../assets/app-adoptMe.png";
import FoodOrder from "../../assets/app-foodOrder.png";
import SpendingTracker from "../../assets/app-monthlySpendingTracker.png";
import Snake from "../../assets/app-snake.png";

const apps = [
  {
    id: 1,
    image: AdoptMe,
    title: "Adopt Me",
    github: "https://github.com/blingblingda/adopt-me",
    demo: "https://blingblingda.github.io/adopt-me",
  },
  {
    id: 2,
    image: FoodOrder,
    title: "A food order app",
    github: "https://github.com/blingblingda/food-order",
    demo: "https://blingblingda.github.io/food-order",
  },
  {
    id: 3,
    image: SpendingTracker,
    title: "Monthly Spending Tracker",
    github: "https://github.com/blingblingda/monthly-spending-tracker",
    demo: "https://blingblingda.github.io/monthly-spending-tracker/",
  },
  {
    id: 4,
    image: Snake,
    title: "Snake",
    github: "https://github.com/blingblingda/snake",
    demo: "https://blingblingda.github.io/snake/",
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
            githubLink={app.github}
            demoLink={app.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
