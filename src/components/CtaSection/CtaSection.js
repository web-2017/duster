import React from 'react'
import { Link } from "react-router-dom";

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="cta-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="cta-text">
                            <h2>15% off for our <br/>new client</h2>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get A Service Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;