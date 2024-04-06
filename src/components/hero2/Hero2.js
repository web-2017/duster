import React from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import hero1 from "../../assets/slider/slide-1.jpg";
import hero2 from "../../assets/slider/slide-2.jpg";

const Hero2 = () => {
  return (
    <section className="hero-slider hero-style-2">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1800}
        parallax={true}
        navigation
      >
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            <div className="container">
              <div className="slide-offer">
                <span>25% off for new client</span>
              </div>
              <div className="slide-title">
                <h2>Modern Cleaning service company</h2>
              </div>
              <div className="slide-text">
                <p>
                  Raising a heavy fur muff that covered the whole of her lower
                  arm towards the viewer.
                </p>
              </div>
              <div className="clearfix"></div>
              <div data-swiper-parallax="500" className="slide-btns">
                <Link to="/about" className="theme-btn-s2">
                  More About Us<span></span>
                </Link>
                <Link to="/services" className="theme-btn-s3">
                  Get A Service<span></span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${hero2})` }}
          >
            <div className="container">
              <div className="slide-offer">
                <span>25% off for new client</span>
              </div>
              <div className="slide-title">
                <h2>We love the job you hate</h2>
              </div>
              <div className="slide-text">
                <p>
                  Raising a heavy fur muff that covered the whole of her lower
                  arm towards the viewer.
                </p>
              </div>
              <div className="clearfix"></div>
              <div data-swiper-parallax="500" className="slide-btns">
                <Link to="/about" className="theme-btn-s2">
                  More About Us<span></span>
                </Link>
                <Link to="/services" className="theme-btn-s3">
                  Get A Service<span></span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Hero2;
