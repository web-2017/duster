import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tImg1 from "../../assets/testimonials/img-1.jpg";
import tImg2 from "../../assets/testimonials/img-2.jpg";

const settings = {
  dots: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Testimonial = (props) => {
  return (
    <section className={`testimonials-section section-padding ${props.tClass}`}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-12">
            <div className="section-title-s2">
              <span>Testimonials</span>
              <h2>What Client Says About us</h2>
            </div>
          </div>
          <div className="col col-lg-8 col-12">
            <div className="testimonial-grids testimonials-slider">
              <Slider {...settings}>
                <div className="grid">
                  <div className="quote">
                    <p>
                      A collection of textile samples lay spread out on the
                      table Samsa was a salesman and above it there hung a
                      picture that he had recently cut out of an illustrated
                      magazine and in a nice, gilded frame t there hung a
                      picture that he llustrated{" "}
                    </p>
                  </div>
                  <div className="details">
                    <div className="img-holder">
                      <img src={tImg1} alt="" />
                    </div>
                    <h5>Jhon dow Play</h5>
                    <span>Happy Client</span>
                  </div>
                </div>
                <div className="grid">
                  <div className="quote">
                    <p>
                      A collection of textile samples lay spread out on the
                      table Samsa was a salesman and above it there hung a
                      picture that he had recently cut out of an illustrated
                      magazine and in a nice, gilded frame t there hung a
                      picture that he llustrated{" "}
                    </p>
                  </div>
                  <div className="details">
                    <div className="img-holder">
                      <img src={tImg2} alt="" />
                    </div>
                    <h5>Jhon dow Play</h5>
                    <span>Happy Client</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
