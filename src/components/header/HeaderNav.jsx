import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CV from "../../assets/cv.pdf";

// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import { BiWinkSmile } from "react-icons/bi";


const HeaderNav = () => {
  return (
    <Navbar expand="md" variant="light" className="pt-5 pb-4">
      <Container className="container-xxl">
        <Navbar.Brand href="/">
          <span className="fs-2 fw-bold text-secondary">
            <i className="bi bi-emoji-wink"></i>{' '}
            Belinda Shan
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="page_nave" />
        <Navbar.Collapse id="page_nave" className="justify-content-end align-center">
          <Nav className="fs-5">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/belinda-shan-126bs414"><i className="bi bi-linkedin"></i></Nav.Link>
            <Nav.Link href="https://github.com/blingblingda"><i className="bi bi-github"></i></Nav.Link>
            <Nav.Link href={CV}>Download CV</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    // <nav className="page_nav">
    //   <ul>
    //     <li>
    //       <h1>
    //         <a href="#">
    //           <span>
    //             <BiWinkSmile />
    //           </span>
    //           <span> Belinda Shan</span>
    //         </a>
    //       </h1>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#portfolio">Projects</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //     <li className="nav_icon">
    //       <a
    //         href="https://www.linkedin.com/in/belinda-shan-126bs414"
    //         target="_blank"
    //       >
    //         <BsLinkedin />
    //       </a>
    //     </li>
    //     <li className="nav_icon">
    //       <a href="https://github.com/blingblingda" target="_blank">
    //         <FaGithub />
    //       </a>
    //     </li>
    //     <li>
    //       <a href={CV} download className="btn nav_btn">
    //         Download CV
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default HeaderNav;
