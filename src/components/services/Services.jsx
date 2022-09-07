import React from "react";
import ServiceContent from "./ServiceContent";
import "./services.css";

const BeginnerCourses = [
  { id: "s1", content: "Getting Started with CSS" },
  { id: "s2", content: "Getting Started with JavaScript" },
  { id: "s3", content: "JavaScript: From fundamentals to functional JS" },
  { id: "s4", content: "Website Accessibility" },
];
const ProfessionalCourses = [
  { id: "s1", content: "JavaScript: The hard parts" },
  { id: "s2", content: "Deep JavaScript Foundations" },
  { id: "s3", content: "Complete Intro React" },
  { id: "s4", content: "Web Performance Fundamentals" },
  { id: "s5", content: "CSS Grid & Flexbox for Responsive Layouts" },
  { id: "s6", content: "TypeScript Fundamentals" },
];
const OtherCourses = [
  {
    id: "s1",
    content: "React – The Complete Guide (incl Hooks, React Router, Redux)",
  },
  { id: "s2", content: "Intro Git & Github" },
];

function Services() {
  return (
    <section id="services">
      <h5>What Courses I Completed</h5>
      <h2>Courses</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Masters Learning Paths - Beginner</h3>
          </div>
          <ul className="service__list">
            {BeginnerCourses.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Frontend Masters Learning Paths - Professional</h3>
          </div>
          <ul className="service__list">
            {ProfessionalCourses.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Udemy Courses</h3>
          </div>
          <ul className="service__list">
            {OtherCourses.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
