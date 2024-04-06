import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tImg1 from '../../images/testimonials/img-1.jpg'
import tImg2 from '../../images/testimonials/img-2.jpg'


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
            }
        }
    ]
};


const Testimonial2 = (props) => {

    return (
        <section className={`testimonials-section-s2 section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12 col-12">
                        <div className="testimonial-grids testimonials-slider">
                            <Slider {...settings}>
                                <div className="grid">
                                    <div className="quote">
                                        <p>A collection of textile samples lay spread out on the table Samsa was a salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and in a nice, gilded frame t there hung a picture that he llustrated </p>
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
                                        <p>A collection of textile samples lay spread out on the table Samsa was a salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and in a nice, gilded frame t there hung a picture that he llustrated </p>
                                    </div>
                                    <div className="details">
                                        <div className="img-holder">
                                            <img src={tImg2} alt="" />
                                        </div>
                                        <h5>Jhon dow Play</h5>
                                        <span>Happy Client</span>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="quote">
                                        <p>A collection of textile samples lay spread out on the table Samsa was a salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and in a nice, gilded frame t there hung a picture that he llustrated </p>
                                    </div>
                                    <div className="details">
                                        <div className="img-holder">
                                            <img src={tImg1} alt="" />
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
}

export default Testimonial2;