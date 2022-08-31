import React from "react";
import ServiceContent from "./ServiceContent";
import "./services.css";

const UIDes = [
  { id: "s1", content: "daslfijdiagonding" },
  { id: "s2", content: "daslfijdiagonding" },
  { id: "s3", content: "daslfijdiagonding" },
  { id: "s4", content: "daslfijdiagonding" },
  { id: "s5", content: "daslfijdiagonding" },
];
const WebDev = [
  { id: "s1", content: "daslfijdiagonding" },
  { id: "s2", content: "daslfijdiagonding" },
  { id: "s3", content: "daslfijdiagonding" },
  { id: "s4", content: "daslfijdiagonding" },
  { id: "s5", content: "daslfijdiagonding" },
  { id: "s6", content: "daslfijdiagonding" },
];
const ContCre = [
  { id: "s1", content: "daslfijdiagonding" },
  { id: "s2", content: "daslfijdiagonding" },
  { id: "s3", content: "daslfijdiagonding" },
  { id: "s4", content: "daslfijdiagonding" },
  { id: "s5", content: "daslfijdiagonding" },
];

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {UIDes.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {WebDev.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {ContCre.map((item) => (
              <ServiceContent key={item.id} content={item.content} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
