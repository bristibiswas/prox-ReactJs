import React from "react";
import "../styles/home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images
import img1 from "../assets/Images/define.png";
import img2 from "../assets/Images/design.png";
import img3 from "../assets/Images/developed.png";
import img4 from "../assets/Images/testing.png";
import img5 from "../assets/Images/deliver.png";
import gov from "../assets/Images/gov.png";
import industry from "../assets/Images/industry.png";
import corporate from "../assets/Images/corporate.png";
import marketing from "../assets/Images/marketing.png";

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        className="carousel"
      >
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Marketing Jobs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  quod.
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={marketing} alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Industrial Jobs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  quod.
                </p>
              </div>
              <div className="col-md-6">
                <img src={industry} alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 text">
                <h2>Corporate Jobs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  quod.
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={corporate} alt="" />
              </div>
            </div>
          </div>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Government Jobs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  quod.
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={gov} alt="" />
              </div>
            </div>
          </div>
      </Carousel>


      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <div className="work-header">
            <h1>How it works</h1>
          </div>
          <div className="feature-area">
            <div className="feature-card">
              <img className="img-fluid" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_01.png" alt="" />
              <h2>POST PROJECT</h2>
              <p>Post a Project to tell us about your project. We'll quickly match you with awesome freelancers.</p>
            </div>
            <div className="feature-card">
              <img className="img-fluid" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" alt="" />
              <h2>FIND & HIRE</h2>
              <p>Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.</p>
            </div>
            <div className="feature-card">
              <img className="img-fluid" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_04.png" alt="" />
              <h2>AWARD & PAY</h2>
              <p>Award Project to the finalised freelancer on Truelancer & enjoy 100% money back guarantee using Safe Deposit.</p>
            </div>
            <div className="feature-card">
              <img className="img-fluid" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_03.png" alt="" />
              <h2>WORK & APPROVE</h2>
              <p>Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <div className="container process">
        <div className="feature-header">
          <h2>Our Process</h2>
          <p>Presentation of the process, detailing the progression of each phase until release.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="col-md-6">
            <h2>Define</h2>
            <p>
              We define the user experience to ensure your website and digital presence align with your brand.
            </p>
          </div>
        </div>
      </div>
      <div className="container process">
        <div className="row reverse">
          <div className="col-md-6">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <div className="col-md-6">
            <h2>Design</h2>
            <p>
              We design user interfaces that prioritize ease of use, accessibility and conversion optimization.
            </p>
          </div>
        </div>
      </div>
      <div className="container process">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img3} alt="" />
          </div>
          <div className="col-md-6">
            <h2>Developed</h2>
            <p>
              We bring your website and digital presence to life using the latest technology and best practices.
            </p>
          </div>
        </div>
      </div>
      <div className="container process">
        <div className="row reverse">
          <div className="col-md-6">
            <img className="img-fluid" src={img4} alt="" />
          </div>
          <div className="col-md-6">
            <h2>Testing</h2>
            <p>
              Our team performs thorough testing to identify and fix any bugs or errors before launch.
            </p>
          </div>
        </div>
      </div>
      <div className="container process">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img5} alt="" />
          </div>
          <div className="col-md-6">
            <h2>Deliver</h2>
          </div>
        </div>
      </div>


      {/* Counts */}
      <section className="counts">
      <div className="container process">
        <div className="row">
          <div className="col-md-3">
            <p>40 +</p>
            <p>Satisfied Clients</p>
          </div>
          <div className="col-md-3">
            <p>40 +</p>
            <p>Team Members</p>
          </div>
          <div className="col-md-3">
            <p>40 +</p>
            <p>Project Delivered</p>
          </div>
          <div className="col-md-3">
            <p>40 +</p>
            <p>Nations Served</p>
          </div>
        </div>
      </div>
      </section>

    </>
  );
};

export default Home;
