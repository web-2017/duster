import React from "react";
import { Link } from "react-router-dom";
import abimg from "../../assets/about-3.jpg";
import abimg2 from "../../assets/about-4.jpg";
import abimg3 from "../../assets/about-5.jpg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const About3 = (props) => {
  return (
    <section className="about-section-s3 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-12">
            <div className="section-title-s2">
              <span>About our history</span>
              <h2>
                We are cleaning services <br />
                company since 1987
              </h2>
            </div>
            <div className="text">
              <p>
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of an illustrated magazine
                and housed in a nice, gilded frame. It showed a lady fitted out
                with a fur hat and fur boa who sat upright, raising a heavy fur
                muff that covered the whole of her lower arm towards the viewer
              </p>
              <Link onClick={ClickHandler} to="/about">
                Read More About us
              </Link>
            </div>
          </div>
          <div className="col col-lg-12 col-12">
            <div className="about-grids clearfix">
              <div className="grid">
                <div className="img-holder">
                  <img src={abimg} alt="" />
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <img src={abimg2} alt="" />
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <img src={abimg3} alt="" />
                </div>
              </div>
              <div className="grid last-grid">
                <div className="middle-text">
                  <h3>We Are the Most Professional Cleaning Service Team</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
