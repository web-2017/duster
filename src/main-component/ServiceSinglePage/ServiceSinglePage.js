import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Services from "../../api/service";
import ServiceTab from "./ServiceTab";
import bImg from "../../assets/service-single/benefit-pic.jpg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ServiceSinglePage = (props) => {
  const { slug } = useParams();

  const ServiceDetails = Services.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar hclass={"header-style-1"} />
      <PageTitle pageTitle={ServiceDetails.sTitle} />

      <section className="service-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-9 order-lg-2 order-1">
              <div className="service-single-content">
                <div className="service-single-img">
                  <img src={ServiceDetails.sImg} alt="" />
                </div>
                <h2>Residential Cleaning</h2>
                <p>
                  Willumn colling, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis.
                </p>
                <blockquote>
                  <p>
                    Fragment collings mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc
                  </p>
                  <span>- Michel jhone</span>
                </blockquote>
                <div className="benefit clearfix">
                  <div className="img-holder">
                    <img src={bImg} alt="" />
                  </div>
                  <div className="details">
                    <h3>System Benefits</h3>
                    <ul>
                      <li>
                        <span>1</span> Tellus eget condimentum rhoncus, sem quam
                      </li>
                      <li>
                        <span>2</span> Get condimentum rhoncus, sem quam
                      </li>
                      <li>
                        <span>3</span> Condimentum rhoncus, sem quam
                      </li>
                    </ul>
                    <p>
                      Tellus eget condimentum rhoncus, sem quam semper libero,
                      sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                      blandit vel, luctus pulvinar, hendrerit id, lorem.
                      Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibussem quam semper libero,
                      sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                      blandit vel, luctus pulvinar
                    </p>
                  </div>
                </div>
                <h3>Research</h3>
                <p>
                  Tellus eget condimentum rhoncus, sem quam semper libero, sit
                  amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                  vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
                  et ante tincidunt tempus. Donec vitae sapien ut libero
                  venenatis faucibus
                </p>
                <ServiceTab />
                <Link onClick={ClickHandler} to="/" className="theme-btn">
                  Get the service
                </Link>
              </div>
            </div>
            <div className="col col-lg-3 order-lg-1 order-2">
              <div className="service-sidebar">
                <div className="widget service-list-widget">
                  <ul>
                    <li className="current">
                      <Link onClick={ClickHandler} to="/services">
                        All Service
                      </Link>
                    </li>
                    {Services.map((service, srv) => (
                      <li key={srv}>
                        <Link
                          onClick={ClickHandler}
                          to={`/service-single/${service.slug}`}
                        >
                          {service.sTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget download-widget">
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/services">
                        <i className="ti-zip"></i>Company presentation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget contact-widget">
                  <div>
                    <h5>
                      We are clearing <span>Experts</span>
                    </h5>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact with us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
