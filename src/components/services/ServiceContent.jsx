import React from "react";
import "./serviceContent.css";
import { BiCheck } from "react-icons/bi";

const ServiceContent = (props) => {
  return (
    <li>
      <BiCheck className="service__list-icon" />
      <p>{props.content}</p>
    </li>
  );
};

export default ServiceContent;
