import React from "react";
import about from "../assets/Images/about-banner.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-banner">
        <div className="container">
          <div className="about-row">
            <div className="about-col about-text">
              <h2>About Us</h2>
              <p>
                This is the all in one platform to start, run & grow your
                business model.
              </p>
            </div>
            <div className="about-col">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
        <BsChevronDoubleDown />
      </div>
      <div className="about-content">
        <h2>Who are we?</h2>
        <p>
          ProXInfotech is a kind of peculier bunch of very different kind of
          people from all over the Country. We served our clients accross all
          over the Country. One thing we all share is a belief that software
          should empower people , and not get in their way. We always taking
          stand against bigotry, injustice and racism. Here we are committed to
          creating an inclusive, accessible workplace.
        </p>
      </div>
    </>
  );
};

export default About;
