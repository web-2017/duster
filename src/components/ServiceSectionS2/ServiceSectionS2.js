import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import ContactForm from "./ContactForm";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = () => {
    return (
        <section className="services-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="service-grids clearfix">
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
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;