import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
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
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};

const ServiceSection = (props) => {
    return (
        <section className={`services-section section-padding ${props.sClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>What we do</span>
                            <h2>The Services we provide for our customer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="service-grids services-slider">
                            <Slider {...settings}>
                                {Services.map((service, srv) => (
                                    <div className="grid" key={srv}>
                                        <div className="icon">
                                            <i className={`fi ${service.icon}`}></i>
                                        </div>
                                        <h3><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                        <p>{service.description}</p>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="more">Read More</Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;