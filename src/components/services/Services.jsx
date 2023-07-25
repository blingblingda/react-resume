import React from "react";
import ServiceContent from "./ServiceContent";
import "./services.css";

const BeginnerCourses = [
  {
    id: "s1",
    content:
      "C – Pointers, recursion, structures, makefiles, libraries, memory allocation, variadic functions, bit manipulation, file i/o, singly and doubly linked lists, hash tables, binary trees, search and sort algorithms, time and space complexity.",
  },
  {
    id: "s2",
    content:
      "Python – OOP (classes, module manipulation, inheritance), data structures, exceptions, file i/o, JSON, web frameworks, RESTful API.",
  },
  {
    id: "s3",
    content:
      "Javascript (objects, scopes and closures), SQL (including MySQL), HTML, CSS, Miro, Bootstrap, Git, Github",
  },
];
const ProfessionalCourses = [
  { id: "s1", content: "Getting Started with CSS" },
  { id: "s2", content: "Getting Started with JavaScript" },
  { id: "s3", content: "JavaScript: From fundamentals to functional JS" },
  { id: "s4", content: "Website Accessibility" },
  { id: "s5", content: "Deep JavaScript Foundations" },
  { id: "s6", content: "Complete Intro React" },
  { id: "s7", content: "Web Performance Fundamentals" },
  { id: "s8", content: "CSS Grid & Flexbox for Responsive Layouts" },
];
const OtherCourses = [
  {
    id: "s1",
    content: "React Development - General Assembly",
  },
  { id: "s2", content: "Intro Git & Github - Udemy" },
  { id: "s3", content: "CS50’s Introduction to Computer Science - HarvardX" },
];

function Services() {
  return (
    <section id="services">
      <h5>What Courses I Completed</h5>
      <h2>Courses</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              Holberton School - Foundations of Software Engineering Program
            </h3>
          </div>
          <ul className="service__list">
            {BeginnerCourses.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Frontend Masters Learning Paths - Beginner & Professional</h3>
          </div>
          <ul className="service__list">
            {ProfessionalCourses.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Other Courses</h3>
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
