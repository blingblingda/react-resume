import React from "react";
import "./client.css";

const Client = (props) => {
  return (
    <article className="testimonial" key={props.id}>
      <div className="client__avatar">
        <img src={props.image} alt={props.name} />
      </div>
      <h5 className="client__name">{props.name}</h5>
      <small className="client__review">{props.comment}</small>
    </article>
  );
};

export default Client;
