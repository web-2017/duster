import React from "react";
import abimg from "../../assets/about-1.jpg";
import abimg2 from "../../assets/about-2.jpg";

const About2 = (props) => {
  return (
    <section className="about-section-s2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="about-row clearfix">
              <div className="img-holder">
                <img src={abimg} alt="" />
              </div>
              <div className="details">
                <div className="middle">
                  <h3>We Are The Best Cleaning Services Company</h3>
                  <p>
                    Picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame. It showed a
                    lady fitted out with a fur hat and fur boa who sat upright,
                    raising a heavy fur muff that covered the whole of her lower
                    arm towards the viewer. Gregor then turned to look out the
                    window at the dull weather. Drops
                  </p>
                  <ul>
                    <li>
                      <i className="ti-check-box"></i> Window Cleasing Service
                    </li>
                    <li>
                      <i className="ti-check-box"></i> Office Cleasing Service
                    </li>
                    <li>
                      <i className="ti-check-box"></i> Eco friedly Works
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-row about-row-2 clearfix">
              <div className="details">
                <div className="middle">
                  <h3>We Are The Best Cleaning Services Company</h3>
                  <p>
                    Picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame. It showed a
                    lady fitted out with a fur hat and fur boa who sat upright,
                    raising a heavy fur muff that covered the whole of her lower
                    arm towards the viewer. Gregor then turned to look out the
                    window at the dull weather. Drops
                  </p>
                  <ul>
                    <li>
                      <i className="ti-check-box"></i> Window Cleasing Service
                    </li>
                    <li>
                      <i className="ti-check-box"></i> Office Cleasing Service
                    </li>
                    <li>
                      <i className="ti-check-box"></i> Eco friedly Works
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-holder">
                <img src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
