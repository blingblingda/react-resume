import React from "react";
import "./portfolio.css";
import Application from "./Application";
import IMG from "../../assets/application.jpeg";

const apps = [
  {
    id: 1,
    image: IMG,
    title: "Adopt me!",
    github: "http://www.github.com",
    demo: "http://www.google.com",
  },
  {
    id: 2,
    image: IMG,
    title: "A food order app",
    github: "http://www.github.com",
    demo: "http://www.google.com",
  },
  {
    id: 3,
    image: IMG,
    title: "Account Book",
    github: "http://www.github.com",
    demo: "http://www.google.com",
  },
  {
    id: 4,
    image: IMG,
    title: "Snake",
    github: "http://www.github.com",
    demo: "http://www.google.com",
  },
  {
    id: 5,
    image: IMG,
    title: "Login Page",
    github: "http://www.github.com",
    demo: "http://www.google.com",
  },
  {
    id: 6,
    image: IMG,
    title: "Adopt me!",
    github: "http://www.github.com",
    demo: "http://www.google.com",
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
