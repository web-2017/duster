import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/footer-logo.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="" />
                                </div>
                                <p>Lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Our services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/projects">Our projects</Link></li>
                                </ul>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home Page</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">News</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Address Location</h3>
                                </div>
                                <ul>
                                    <li>15/17 Marvel aveniew, new Dusting town, Austria</li>
                                    <li><span>Phone:</span> 54647541</li>
                                    <li><span>Email:</span> ex@demo.com</li>
                                    <li><span>Office Time:</span> 10AM- 5PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>You will be notified when somthing new will be appear.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p className="copyright">Copyright &copy; 2024 Duster. All rights reserved.</p>
                            <div className="extra-link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/blog">News</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;