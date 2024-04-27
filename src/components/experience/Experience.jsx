import React from "react";
import "./experience.css";
import Skills from "./Skills";

const frontend_skills = [
  { id: "s1", title: "HTML", level: "Intermediate" },
  { id: "s2", title: "CSS", level: "Intermediate" },
  { id: "s3", title: "JavaScript", level: "Intermediate" },
  { id: "s4", title: "TypeScript", level: "Intermediate" },
  { id: "s5", title: "React", level: "Intermediate" },
  { id: "s6", title: "Bootstrap", level: "Intermediate" },
  { id: "s7", title: "Python", level: "Basic" },
  { id: "s8", title: "C", level: "Basic" },
  { id: "s9", title: "Docker", level: "Basic" },
  { id: "s10", title: "Git", level: "Basic" },
];

const backend_skills = [
  { id: "s1", title: "Microsoft Office", level: "Experienced" },
  { id: "s2", title: "Xero", level: "Experienced" },
  { id: "s3", title: "MYOB", level: "Intermediate" },
  { id: "s4", title: "Oracle", level: "Basic" },
  { id: "s5", title: "Power BI", level: "Basic" },
];

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical skills</h3>
          <div className="experience__content">
            {frontend_skills.map((skill) => (
              <Skills key={skill.id} title={skill.title} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Other skills</h3>
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
