import React from "react";
import "./experience.css";
import Skills from "./Skills";

const frontend_skills = [
  { id: "s1", title: "HTML", level: "Experienced" },
  { id: "s2", title: "JavaScript", level: "Experienced" },
  { id: "s3", title: "Tailwind", level: "Basic" },
  { id: "s4", title: "CSS", level: "Experienced" },
  { id: "s5", title: "Bootstrap", level: "Basic" },
  { id: "s6", title: "React", level: "Intermediate" },
];

const backend_skills = [
  { id: "s1", title: "Node JS", level: "Experienced" },
  { id: "s2", title: "PHP", level: "Experienced" },
  { id: "s3", title: "Python", level: "Basic" },
  { id: "s4", title: "MongoDB", level: "Experienced" },
  { id: "s5", title: "MySQL", level: "Basic" },
];

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend_skills.map((skill) => (
              <Skills key={skill.id} title={skill.title} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend_skills.map((skill) => (
              <Skills key={skill.id} title={skill.title} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
