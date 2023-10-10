import React from "react";
import { motion } from "framer-motion";
import mobile from "../assets/Images/mobile.jpg";
import development from "../assets/Images/software-development.jpg";
import "../styles/service.css";

const ServiceAnimation = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    left: {
      opacity: 0,
      x: "-100%",
    },
    right: {
      opacity: 0,
      x: "+100%",
    },
  };

  return (
    <>
      <div className="mobile">
        <h2>
          <span>Our</span> Services
        </h2>
        <div className="mobile-row">
        <div className="row-section">
          <motion.div
            className="col-section mobile-content"
            whileInView={animations.whileInView}
            initial={animations.right}
          >
            <h4>Mobile App</h4>
            <p>
              Creating technically advanced and asthetically pleasing mobile app
              in ios and android.
            </p>
          </motion.div>
          <motion.div
            className="col-section col-img"
            whileInView={animations.whileInView}
            initial={animations.left}
          >
            <img src={mobile} alt="" />
          </motion.div>
        </div>
        <div className="row-section reverse">
          <motion.div
            className="col-section mobile-content"
            whileInView={animations.whileInView}
            initial={animations.left}
          >
            <h4>Our mobile app development services</h4>
            <p>
              We focus on three primary characteristics while developing an app:
              the design, the simplicity of use, and the conversion potential.
              While the UI/UX is what draws users in the first place, the app's
              long-term value to consumers will lead to conversions for your
              company.
            </p>
          </motion.div>
          <motion.div
            className="col-section col-img"
            whileInView={animations.whileInView}
            initial={animations.right}
          >
            <img src={development} alt="" />
          </motion.div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAnimation;
