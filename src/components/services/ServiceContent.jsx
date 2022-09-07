import React from "react";
import "./serviceContent.css";
import { BiCheck } from "react-icons/bi";

const ServiceContent = (props) => {
  return (
    <li>
      <div className="service__list-icon"><BiCheck /></div>
      <p>{props.content}</p>
    </li>
  );
};

export default ServiceContent;
