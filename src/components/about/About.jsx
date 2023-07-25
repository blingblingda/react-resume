import React from "react";
import "./about.css";
import ME from "../../assets/me-about.PNG";
import { FaAward } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Multi-industry work experiences</h5>
            </article>
            <article className="about__card">
              <GiBookCover className="about__icon" />
              <h5>A curious and fast learner</h5>
            </article>
            <article className="about__card">
              <RiTeamFill className="about__icon" />
              <h5>A good team worker</h5>
            </article>
          </div>

          <p>
            A highly motivated, creative and fast learner who is committed to
            top-quality work. Personable and industrious with extensive work
            experience. Eager to embrace new challenges and continuously enhance
            web development skills. Seeking opportunities to contribute to
            innovative projects as a developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
