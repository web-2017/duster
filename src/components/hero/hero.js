import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero-static-bg.png";

const Hero = () => {
  return (
    <section className="hero-slider hero-static">
      <div
        className="slide-inner slide-bg-image"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container">
          <div className="content">
            <div className="slide-offer">
              <span>25% off for new client</span>
            </div>
            <div className="slide-title">
              <h2>We Love the Job You Hate !</h2>
            </div>
            <div className="slide-text">
              <p>
                Samsa was a travelling salesman and above it there hung a
                picture that he had recently cut out of an
              </p>
            </div>
            <div className="clearfix"></div>
            <div className="slide-btns">
              <Link to="/about" className="theme-btn-s2">
                More About Us
              </Link>
              <Link to="/services" className="theme-btn-s3">
                Get A Service
              </Link>
            </div>
          </div>
          <div className="hero-pic"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
