import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = (props) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{props.title}</h4>
        <small className="text-light">{props.level}</small>
      </div>
    </article>
  );
};

export default Skills;
