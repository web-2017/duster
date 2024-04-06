import React from 'react'
import abimg from '../../images/about.png'
import VideoModal from '../ModalVideo/VideoModal'


const About = (props) => {
    return (
        <section className={`about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>About our history</span>
                            <h2>We are cleaning company since 1987</h2>
                        </div>
                        <div className="details">
                            <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm </p>
                            <ul>
                                <li><i className="ti-check-box"></i>Fitted out with a fur hat</li>
                                <li><i className="ti-check-box"></i>Showed a lady fitted our with far.</li>
                                <li><i className="ti-check-box"></i>Hourse cleansing</li>
                            </ul>
                            <h4>Illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and</h4>
                            <div className="quoter">
                                - Jhon Dow, <span>Manager of service</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="img-video-holder">
                            <img src={abimg} alt="" />
                            <div className="video-holder">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;