import React from "react";
import "./contactOption.css";

const ContactOption = (props) => {
  return (
    <article className="contact__option" key={props.id}>
      <div className="contact__option-icon">{props.icon}</div>
      <h4>{props.title}</h4>
      <h5>{props.content}</h5>
      <a href={props.address} target="_blank">
        Send a message
      </a>
    </article>
  );
};

export default ContactOption;
