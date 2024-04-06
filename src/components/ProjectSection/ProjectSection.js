import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";


const ProjectSection = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
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


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className="recent-project-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>Recent Projects</span>
                            <h2>Check Recent Project Done for client</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area">
                <div className="case-grids projects-slider">
                    <Slider {...settings}>
                        {Projects.slice(0, 6).map((project, prj) => (
                            <div className="grid" key={prj}>
                                <div className="inner">
                                    <div className="img-holder">
                                        <img src={project.pImg} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="info">
                                            <h3><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{`${project.title} cleaning`}</Link></h3>
                                            <p className="cat">{project.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;