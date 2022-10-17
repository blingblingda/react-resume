import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ME from "../../assets/me-about.PNG";
import { FaAward } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

function About() {
  return (
    <section id="about" className="bg-bgc">
    <Container className="bg-bgc mt-5">
      <div className="text-center">
        <h5 className="fs-6">Get To Know</h5>
        <h2 className="fs-4 fw-bold">About Me</h2>
      </div>
      <Row className="justify-content-around">
        <Col className="col-md-3 text-center d-none d-md-block">
          <img src={ME} className="img-fluid"/>
        </Col>
        <Col className="col-md-5 text-center text-md-start">
          <div className="">
            <Row className="justify-content-center">
              <Col className="col-md-4 text-center">
                <FaAward className="my-3" />
                <h5>Multi-industry work experiences</h5>
              </Col>
              <Col className="col-md-4 text-center">
                <GiBookCover className="my-3" />
                <h5>A curious and fast learner</h5>
              </Col>
              <Col className="col-md-4 text-center">
                <RiTeamFill className="my-3" />
                <h5>A good team worker</h5>
              </Col>
            </Row>

            <p className="fs-6 py-4">
              A highly motivated, creative and fast learner who is committed to
              top-quality work. Personable and industrious with extensive work
              experience. I enjoy continuously building my skills through a variety of project work.
            </p>

            <Button href="#contact" variant="primary">Let's Talk</Button>{' '}
          </div>
        </Col>

      </Row>
    </Container>
    </section>
  );
}

export default About;
