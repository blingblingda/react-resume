import React from "react";
import "./header_nav.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiWinkSmile } from "react-icons/bi";
import CV from "../../assets/cv.pdf";

const HeaderNav = () => {
  return (
    <nav className="page_nav">
      <ul>
        <li>
          <h1>
            <a href="#">
              <span>
                <BiWinkSmile />
              </span>
              <span> Belinda Shan</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="nav_icon">
          <a
            href="https://www.linkedin.com/in/belinda-shan-126bs414"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="nav_icon">
          <a href="https://github.com/blingblingda" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={CV} download className="btn nav_btn">
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
