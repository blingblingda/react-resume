import React from "react";
import "./application.css";

const Application = (props) => {
  return (
    <article key={props.id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={props.image} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <div className="portfolio__item-cta">
        <a href={props.githubLink} className="btn" target="_blank">
          Github
        </a>
        <a href={props.demoLink} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Application;
