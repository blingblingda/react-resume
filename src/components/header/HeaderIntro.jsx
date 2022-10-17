import React from "react";
import Container from 'react-bootstrap/Container';

const HeaderIntro = () => {
  return (
    <section id="intro">
      <Container className="container-lg mt-5">
        <h1 className="pt-5">
          <div className="fs-6 text-muted mb-3">Hello, my name is</div>
          <div className="display-3 fw-bold">Belinda Shan</div>
        </h1>
        <h2 className="display-4 mt-4 fw-bold text-muted">I build things for the web.</h2>
        <p className="fs-6 mt-5">I'm an accountant turned and self-taught front-end developer.</p>
        <p className="fs-6">Now I'm focusing on building my skills in front-end development.</p>
      </Container>
    </section>
  );
};

export default HeaderIntro;