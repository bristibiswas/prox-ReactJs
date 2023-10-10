import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import ServiceAnimation from "./ServiceAnimation";
import Agreement from "../assets/Images/Agreement.png";
import graphics from "../assets/Images/graphics.jpg";
import "../styles/service.css";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    end: {
      opacity: 0,
      x: "+100%",
    },
  };

  return (
    <>
      <div className="service-banner">
        <div className="container">
          <h2>Services</h2>
          <p>
            We are the top software development company in Kolkata, and we
            create advanced web and mobile solutions towards great measurable
            business and branch value.
          </p>
        </div>
        <BsChevronDoubleDown />
      </div>

      {/* Service Animations */}
      <ServiceAnimation />

      {/* Servive Bottom */}
      <div className="service">
        <div className="graphics">
        <img src={graphics} alt="" />
        </div>
        <div className="service-bottom">
          <div className="service-col">
            <h2>Graphics</h2>
            <p>
              Creating meaningful branding and graphics which enhances your
              brand recognition, awereness. Our work tends to be modern,
              pleasing and in tune to your vision.
            </p>
          </div>
          <div className="service-col">
            <h2>Web Design</h2>
            <p>
              Creating aesthetically pleasing, responsive modern and highly
              flexible design, UI/UX for web and mobile.
            </p>
          </div>
        </div>
      </div>

      {/* Reasons */}
      <div className="reasons">
        <div className="row">
          <h2>Reasons to work together</h2>
          <motion.div
            whileInView={animations.whileInView}
            initial={animations.end}
            className="col-md-6 left"
          >
            <img src={Agreement} alt="" />
          </motion.div>
          <div className="col-md-6 right">
            <div className="text">
              <h4>We Listen</h4>
              <p>
                As a top software development company in Kolkata, we follow
                three cardinal rules. We listen, we discuss, and then we
                consult. We ensure we clearly understand your ideas, plans and
                objectives before adding our flavour.
              </p>
            </div>
            <div className="text">
              <h4>Creative & Technical</h4>
              <p>
                Whether it's website or graphic design, system development,
                mobile apps or custom programming we like to keep everything
                under one roof to make it easier for our customers.
              </p>
            </div>
            <div className="text">
              <h4>Passionate</h4>
              <p>
                We love nothing more than working on a great project with a
                fantastic client. We care about our clients and can often be
                found working out of hours to get everything 'just right'!.
              </p>
            </div>
            <div className="text">
              <h4>Quality Drive Process</h4>
              <p>
                Our 4-phase process ensures your web design project flows
                smoothly and efficiently. We employ quality-control checklists
                throughout the process and will communicate with you on a
                regular basis.
              </p>
            </div>
            <div className="text">
              <h4>On-schedule Deployment</h4>
              <p>
                The gruelling task of website and app launch is streamlined
                through an organised approach; once the sitemap is determined, a
                checklist is formed for eradicating potential hazards.
              </p>
            </div>
            <div className="text">
              <h4>Pocket Friendly</h4>
              <p>
                Your vision comes to us first. You can rely on the top software
                development company in Kolkata, as we are willing to go the
                extra mile for our passionate clients. We are budget-friendly
                and accommodative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
