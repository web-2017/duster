import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Projects from "../../api/project";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import psImg from "../../assets/latest-projects/img-6.jpg";

const ProjectSinglePage = (props) => {
  const { slug } = useParams();

  const projectDetails = Projects.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar hclass={"header-style-1"} />
      <PageTitle
        pageTitle={`${projectDetails.title} Cleaning`}
        pagesub={"Project"}
      />
      <section className="portfolio-sigle-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="project-single-content">
                <div className="project-single-img-holder">
                  <img src={projectDetails.pImg} alt="" />
                  <img src={psImg} alt="" />
                </div>
                <div className="content-area">
                  <div className="project clearfix">
                    <div className="project-info">
                      <h3>Information</h3>
                      <ul>
                        <li>
                          <span>Client:</span> Jhon Trait
                        </li>
                        <li>
                          <span>Location:</span> City, Austria
                        </li>
                        <li>
                          <span>Date:</span> Aug 25, 2019
                        </li>
                        <li>
                          <span>Catetory:</span> Office, Window
                        </li>
                        <li>
                          <span>Time:</span> 1 Month
                        </li>
                        <li>
                          <span>Tags:</span> Cleaning, Services{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="project-details">
                      <h2>
                        {projectDetails.title} Cleaning project in Austria
                      </h2>
                      <p>
                        Viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue.
                        Curabitur ullamcorper ultricies nisi. Nam eget dui.
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam semper libero, sit amet adipiscing sem
                        neque sed ipsum. Nam quam nunc, blandit{" "}
                      </p>
                      <p>
                        Porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                        tellus. Phasellus viverra nulla ut metus varius laoreet.
                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                        vel augue. Curabitur ullamcorper ultricies nisi. Nam
                        eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, sem quam semper libero, sit amet
                        adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                        vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
                        odio et ante tincidunt tempus. Donec vitae sapien ut
                        libero venenatis faucibus ullam quis ante.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="challange-solution-section"></div>
                  <div className="prev-next-project">
                    <div>
                      <Link to="/project-single/Carpet">
                        <div className="icon">
                          <i className="ti-arrow-circle-left"></i>
                        </div>
                        <span>Previous project</span>
                        <h5>Turned to look out the window at the dull </h5>
                      </Link>
                    </div>
                    <div>
                      <Link to="/project-single/Express">
                        <div className="icon">
                          <i className="ti-arrow-circle-right"></i>
                        </div>
                        <span>Next project</span>
                        <h5>covered the whole of her lower</h5>
                      </Link>
                    </div>
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
export default ProjectSinglePage;
