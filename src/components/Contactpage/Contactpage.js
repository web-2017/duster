import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <div className="contact-page-wrap">
            <section className="contact-section contact-section-s2 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                            <div className="section-title">
                                <span>Contact</span>
                                <h2>Love to Here From You!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col col-lg-8">
                            <div className="content-area">
                                <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus</p>
                                <div className="contact-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-info-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-info clearfix">
                                <div>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>example@demo.com <br />demo@mail.com</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="ti-headphone-alt"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>++9754175641745 <br />++54175641745</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Address</h5>
                                    <p>22/1 Dash uddin sorok <br />Melborn, Dhank</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-map-section">
                <div className="contact-map">
                    <iframe title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    )

}

export default Contactpage;
